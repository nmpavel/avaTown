import { Comment } from '@/models/Comment'
import React, { useEffect, useState } from 'react'

interface Props {
  allComments: Comment[]
}

const CommentsSection = ({ allComments }: Props) => {
  const [comments, setComments] = useState<Comment[]>(allComments);
  const [newComment, setNewComment] = useState<string>("");
  const [replyComment, setReplyComment] = useState<{ [key: string]: string }>({});
  const [time ,setTime] = useState<string>("");
  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newId = (comments.length + 1).toString();
    const newCommentObj: Comment = {
      id: newId,
      text: newComment,
      replies: [],
    };

    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  const handleReplySubmit = (
    e: React.FormEvent<HTMLFormElement>,
    parentId: string
  ) => {
    e.preventDefault();

    const parentComment = comments.find((c) => c.id === parentId);
    const replyText = replyComment[parentId];

    if (parentComment && replyText) {
      const newId = `${parentId}.${parentComment.replies.length + 1}`;
      const newCommentObj: Comment = {
        id: newId,
        text: replyText,
        replies: [],
      };

      parentComment.replies.push(newCommentObj);
      setComments([...comments]);
      setReplyComment({ ...replyComment, [parentId]: "" });
    }
  };
  useEffect(()=>{
       setTime(new Date().toLocaleString());
  },[])

  const renderComment = (comment: Comment) => (
    <div key={comment.id} className="p-4 space-y-2 bg-gray-100 rounded-2xl">
      <p>
        <strong>Pavel</strong> : {time} 
      </p>
      <p>{comment.text}</p>
  
      {/* Only render the reply input field and button if this is not a reply */}
      {!comment.id.includes('.') && (
        <form onSubmit={(e) => handleReplySubmit(e, comment.id)}>
          <div className="mb-2">
            <textarea
              placeholder="Reply to this comment"
              value={replyComment[comment.id] || ""}
              onChange={(e) =>
                setReplyComment({
                  ...replyComment,
                  [comment.id]: e.target.value,
                })
              }
              className="p-2 border border-gray-300 rounded-md w-full"
              rows={1}
            />
          </div>
  
          <div className="text-right">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Reply
            </button>
          </div>
        </form>
      )}
  
      <div className="pl-4">
        {/* Render replies recursively */}
        {comment.replies.map((reply) => renderComment(reply))}
      </div>
    </div>
  );
  

  return (
    <div className='mx-6 mb-6 rounded-2xl shadow-2xl w-[1200px] bg-white px-16 py-8  '>
      <h2 className="text-3xl font-bold mb-8">Comments:</h2>

      <div className='flex flex-col space-y-6'>
      {comments.map((comment) => renderComment(comment))}
      </div>

      <form onSubmit={handleCommentSubmit} className="mt-4">
        <div className="mb-2">
          <textarea
            placeholder="Let us know what you are thinking about this."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
              cols={50}
              rows={5}
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentsSection