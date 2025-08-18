import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./City.css";
import { useAuth } from "../../../Context/Auth";
import NavBar from "../../Layout/NavBar/NavBar";
import { useRef } from "react";

const City = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoggedIn } = useAuth();
  const commentText = useRef("");
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle|loading|success|error
  const [errorMsg, setErrorMsg] = useState("");

  const API_BASE = "http://localhost:3000";

  const fetchPost = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE}/post/${id}`);
      if (!response.ok) throw new Error("Failed to fetch post");
      const data = await response.json();
      setPost(data.result);
    } catch (err) {
      console.error(err);
    }
  }, [id]);

  const fetchComments = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE}/post/${id}/comments`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to fetch comments");
      const data = await response.json();

      const list = Array.isArray(data?.comments) ? data.comments : [];

      list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setComments(list);
    } catch (err) {
      alert("Neuspešno učitavanje komentara. Pokušaj kasnije.");
      console.error(err);
    }
  }, [id]);

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [fetchPost, fetchComments]);

  const openCommentModal = () => {
    setErrorMsg("");
    setIsCommentModalOpen(true);
  };

  const closeCommentModal = () => {
    if (submitStatus === "loading") return;
    setIsCommentModalOpen(false);
  };

  const handleSubmitComment = async () => {
    if (!commentText.current.value.trim()) {
      setErrorMsg("Komentar ne može biti prazan.");
      return;
    }
    setSubmitStatus("loading");
    setErrorMsg("");
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://localhost:3000/post/${id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text: commentText.current.value.trim() }),
      });

      if (!res.ok) {
        let message = "Neuspešno slanje komentara.";
        try {
          const data = await res.json();
          console.log("ovde data", data);
          if (data?.error) message = data.error;
        } catch {}
        throw new Error(message);
      }

      setSubmitStatus("success");
      setIsCommentModalOpen(false);
      // obavezno refetch komentara da se pojavi najnoviji
      await fetchComments();
    } catch (e) {
      setSubmitStatus("error");
      setErrorMsg(e.message || "Neuspešno slanje komentara.");
    } finally {
      // kratko reset statusa nakon zatvaranja modala
      setTimeout(() => setSubmitStatus("idle"), 300);
    }
  };

  if (!post) {
    return (
      <div className="city-page">
        <div className="city-wrapper">
          <h2>City not found</h2>
          <button onClick={() => navigate(-1)} className="city-back-btn">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="city-page">
        <div className="city-wrapper">
          <div className="city-header">
            <h1 className="city-title">{post.destination}</h1>
            <span className="pill">{post.country || "Destination"}</span>
          </div>

          <p className="city-description">{post.description}</p>
          <div className="city-info">
            <span className="city-user">
              Posted by: <strong>{post.createdBy || "Unknown"}</strong>
            </span>
            {post.createdAt && (
              <span className="city-date">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            )}
            <div>{post.text}</div>
          </div>

          {/* --- Komentari sekcija --- */}
          <section className="comments-section">
            <div className="comments-header">
              <h2 className="comments-title">Komentari</h2>
              {isLoggedIn && (
                <button className="comment-add-btn" onClick={openCommentModal}>
                  Ostavi komentar
                </button>
              )}
            </div>

            {comments.length === 0 && (
              <div className="comments-empty">Još uvek nema komentara.</div>
            )}

            {comments.length > 0 && (
              <ul className="comments-list">
                {comments.map((c) => (
                  <li key={c.id || c._id} className="comment-item">
                    <div className="comment-avatar">
                      {(c.createdBy || "U").slice(0, 1).toUpperCase()}
                    </div>
                    <div className="comment-body">
                      <div className="comment-meta">
                        <span className="comment-author">{c.createdBy}</span>
                        <span className="comment-date">{c.createdAt}</span>
                      </div>
                      <p className="comment-text">{c.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
        {/* --- Modal za dodavanje komentara --- */}
        {isCommentModalOpen && (
          <div className="modal-overlay" onClick={closeCommentModal}>
            <div
              className="modal"
              onClick={(e) => e.stopPropagation()} // spreči zatvaranje kad klikneš unutar modala
            >
              <h3 className="modal-title">Ostavi komentar</h3>
              <textarea
                className="modal-textarea"
                rows={5}
                ref={commentText}
                placeholder="Napiši svoj komentar..."
                disabled={submitStatus === "loading"}
              />
              {errorMsg && <div className="modal-error">{errorMsg}</div>}
              <div className="modal-actions">
                <button
                  className="btn-secondary"
                  onClick={closeCommentModal}
                  disabled={submitStatus === "loading"}
                >
                  Otkaži
                </button>
                <button
                  className="btn-primary"
                  onClick={handleSubmitComment}
                  disabled={submitStatus === "loading"}
                >
                  {submitStatus === "loading" ? "Slanje…" : "Objavi"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default City;
