import React, { useState, useRef } from 'react';
import { Post, Comment } from '../../types';
import { useTranslation } from '../../hooks/useTranslation';
import { translateText, summarizeText } from '../../services/geminiService';
import ProfileModal from './ProfileModal';
import ShareModal from './ShareModal';
import { useUser } from '../../contexts/UserContext';

interface FeedItemProps {
  post: Post;
  index: number;
}

const HeartIcon = ({ filled }: { filled: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform transform ${filled ? 'scale-110' : ''}`} fill={filled ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);
const CommentIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
const ShareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.862 13.033 9 12.688 9 12.316c0-.372-.138-.717-.316-1.026l4.242-2.121c.178.309.43.564.717.742l-2.12 4.243zm5.328-3.354c-.178-.309-.43-.564-.717-.742l2.12-4.243c.287.178.54.433.717.742l-2.12 4.243zM12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>;

const FeedItem: React.FC<FeedItemProps> = ({ post, index }) => {
  const { user, content, imageUrl, createdAt, type } = post;
  const { t, language } = useTranslation();
  const { currentUser } = useUser();

  const [translatedContent, setTranslatedContent] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  
  const [likes, setLikes] = useState(post.likes);
  const [shares, setShares] = useState(post.shares);
  const [postComments, setPostComments] = useState(post.comments);
  const [newComment, setNewComment] = useState('');
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  
  const isLiked = likes.includes(currentUser.id);
  const commentInputRef = useRef<HTMLInputElement>(null);

  const handleTranslate = async () => {
    setIsTranslating(true);
    const result = await translateText(content, language);
    setTranslatedContent(result);
    setIsTranslating(false);
  };
  
  const handleSummarize = async () => {
    setIsSummarizing(true);
    const result = await summarizeText(content);
    setSummary(result);
    setIsSummarizing(false);
  };

  const handleLike = () => {
    if (isLiked) {
        setLikes(likes.filter(id => id !== currentUser.id));
    } else {
        setLikes([...likes, currentUser.id]);
    }
  };

  const handleShare = () => {
    if(!isShareModalOpen) {
        setShares(prev => prev + 1); // Optimistically update count only when opening
    }
    setIsShareModalOpen(true);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
        const newCommentObj: Comment = {
            id: `c${Date.now()}`,
            user: currentUser,
            content: newComment.trim(),
        };
        setPostComments(prev => [...prev, newCommentObj]);
        setNewComment('');
    }
  };

  const focusCommentInput = () => {
    commentInputRef.current?.focus();
  };

  const SparklesIcon = () => <svg className="w-4 h-4 text-gole-green inline-block mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm11 1a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1V4a1 1 0 011-1zM5.293 9.293a1 1 0 011.414 0L8 10.586l1.293-1.293a1 1 0 111.414 1.414L9.414 12l1.293 1.293a1 1 0 01-1.414 1.414L8 13.414l-1.293 1.293a1 1 0 01-1.414-1.414L6.586 12 5.293 10.707a1 1 0 010-1.414zM15 9a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>;

  const CommentItem: React.FC<{comment: Comment}> = ({comment}) => {
    const isAI = comment.isAI;
    return (
      <div className="flex items-start space-x-3">
        <img src={comment.user.avatar} alt={comment.user.name} className="h-8 w-8 rounded-full flex-shrink-0" />
        <div className={`flex-1 rounded-lg ${isAI ? 'p-3 bg-gole-light-blue/20 border-l-4 border-gole-green' : 'px-3 py-2 bg-gray-100'}`}>
            <div className="flex items-center">
                {isAI && <SparklesIcon />}
                <span className="font-semibold text-sm text-gole-dark">{comment.user.name}</span>
            </div>
            <p className="text-sm text-gray-800 mt-1 break-words">{comment.content}</p>
        </div>
      </div>
    );
  };

  const placeholderImage = 'https://picsum.photos/seed/placeholder/600/400';
  const shouldDisplayImage = type === 'image' || type === 'report';
  const displayImageUrl = imageUrl || placeholderImage;


  return (
    <>
      <div 
        className="border-t border-gray-200 pt-6 post-appear"
        style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
      >
        <div className="flex items-start space-x-4">
          <img src={user.avatar} alt={user.name} className="h-12 w-12 rounded-full" />
          <div className="flex-1">
            <div className="flex items-baseline space-x-2">
              <button onClick={() => setIsProfileModalOpen(true)} className="font-bold text-gole-dark hover:underline text-left">
                {user.name}
              </button>
              <p className="text-xs text-gray-500">{createdAt}</p>
            </div>
            <p className={`px-1 text-xs font-semibold rounded-full w-fit ${
              user.community === 'Women' ? 'bg-red-200 text-gole-red' : 
              user.community === 'Youth' ? 'bg-blue-200 text-gole-blue' :
              'bg-green-200 text-gole-green'
            }`}>
              {user.community}
            </p>

            <p className="mt-2 text-gray-800">{content}</p>

            {translatedContent && <div className="mt-2 p-3 bg-gole-sand/30 rounded-lg text-sm text-gray-700 italic">{translatedContent}</div>}

            {shouldDisplayImage && <img src={displayImageUrl} alt="Post content" className="mt-3 rounded-lg w-full object-cover max-h-96" />}
            
            <div className="mt-3 flex items-center space-x-4">
              <button onClick={handleTranslate} disabled={isTranslating} className="text-sm font-semibold text-gole-blue hover:underline disabled:opacity-50">
                  {isTranslating ? t('generating') : t('translate')}
              </button>
              {type === 'report' && (
                  <button onClick={handleSummarize} disabled={isSummarizing} className="text-sm font-semibold text-gole-green hover:underline disabled:opacity-50">
                      {isSummarizing ? t('generating') : t('generateSummary')}
                  </button>
              )}
            </div>
            
            {summary && (
                <div className="mt-4 p-4 bg-green-50 border border-gole-green rounded-lg">
                    <h4 className="font-bold text-gole-green text-sm">AI Summary</h4>
                    <p className="text-sm text-gray-700 mt-1">{summary}</p>
                </div>
            )}
            
            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                <span>{likes.length} {t('likesCount')}</span>
                <span>{postComments.length} {t('commentsCount')}</span>
                <span>{shares} {t('sharesCount')}</span>
            </div>

            <div className="mt-2 border-t border-b border-gray-200 py-1 flex justify-around">
                <button onClick={handleLike} className={`flex items-center space-x-2 rounded-md px-4 py-2 w-full justify-center hover:bg-gray-100 transition-colors ${isLiked ? 'text-gole-red' : 'text-gray-600'}`} aria-pressed={isLiked}>
                    <HeartIcon filled={isLiked} />
                    <span className="font-semibold">{t('like')}</span>
                </button>
                <button onClick={focusCommentInput} className="flex items-center space-x-2 rounded-md px-4 py-2 w-full justify-center hover:bg-gray-100 transition-colors text-gray-600">
                    <CommentIcon />
                    <span className="font-semibold">{t('commentAction')}</span>
                </button>
                <button onClick={handleShare} className="flex items-center space-x-2 rounded-md px-4 py-2 w-full justify-center hover:bg-gray-100 transition-colors text-gray-600">
                    <ShareIcon />
                    <span className="font-semibold">{t('share')}</span>
                </button>
            </div>

            {postComments.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-200/80 space-y-4">
                {postComments.map(comment => <CommentItem key={comment.id} comment={comment}/>)}
              </div>
            )}
            <form onSubmit={handleCommentSubmit} className="mt-4 flex items-center space-x-3">
              <img src={currentUser.avatar} alt="Your avatar" className="h-8 w-8 rounded-full" />
              <div className="relative flex-1">
                <input 
                  ref={commentInputRef}
                  type="text" 
                  placeholder={t('addComment')} 
                  aria-label={t('addComment')}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full text-sm bg-gray-100 border-transparent rounded-full py-2 pl-4 pr-10 focus:bg-white focus:ring-2 focus:ring-gole-blue focus:border-transparent transition-all"
                />
                <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gole-blue" aria-label="Submit comment">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
        postUrl={`https://golekaab.example.com/post/${post.id}`}
      />
      {isProfileModalOpen && (
        <ProfileModal 
          user={user} 
          isOpen={isProfileModalOpen} 
          onClose={() => setIsProfileModalOpen(false)} 
        />
      )}
    </>
  );
};

export default FeedItem;
