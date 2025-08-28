import React, { useState, useEffect, useRef } from 'react';
import { User } from '../../types';
import { useTranslation } from '../../hooks/useTranslation';
import { isValidUrl } from '../../utils/validation';
import { useUser } from '../../contexts/UserContext';

// SVG Icons for social media
const TwitterIcon = () => <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085c.645 1.956 2.523 3.379 4.746 3.419-1.815 1.416-4.12 2.264-6.625 2.264a18.23 18.23 0 01-.624-.036c2.343 1.495 5.13 2.372 8.13 2.372 9.75 0 15.08-8.06 15.08-15.08 0-.23 0-.46-.015-.688a10.835 10.835 0 002.64-2.744z"></path></svg>;
const FacebookIcon = () => <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h5.835c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z"></path></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266.058 1.644.07 4.85.07zm0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.286.058 1.694.072 4.947.072s3.667-.014 4.947-.072c4.354-.199 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path></svg>;

interface ProfileModalProps {
  user: User;
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ user, isOpen, onClose }) => {
  const { t } = useTranslation();
  const { currentUser, updateUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [editableUser, setEditableUser] = useState<User>(user);
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEditableUser(user);
    if (!isEditing) {
        setErrors({});
    }
  }, [user, isEditing]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditableUser(prev => ({ ...prev, [name]: value }));
  };
  
  const handleImageClick = () => {
    if (isEditing) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditableUser(prev => ({ ...prev, avatar: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditableUser(prev => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [name]: value },
    }));

    if (!isValidUrl(value)) {
      setErrors(prev => ({ ...prev, [name]: t('invalidUrl') }));
    } else {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSave = () => {
    updateUser(editableUser);
    setIsEditing(false);
  };
  
  const handleCancel = () => {
      setEditableUser(user);
      setIsEditing(false);
      setErrors({});
  }

  if (!isOpen) return null;

  const isFormValid = Object.values(errors).every(error => !error);
  const canEdit = currentUser.id === user.id;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onClose} role="dialog" aria-modal="true">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600" aria-label="Close profile">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="p-6">
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <img 
                      src={editableUser.avatar} 
                      alt={editableUser.name} 
                      className={`h-20 w-20 rounded-full object-cover border-4 border-gole-sand ${isEditing ? 'cursor-pointer hover:opacity-80' : ''}`}
                      onClick={handleImageClick}
                    />
                    {isEditing && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white text-xs font-bold text-center pointer-events-none p-1">
                          {t('changePicture')}
                      </div>
                    )}
                </div>
                 <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*"/>
                <div>
                    {isEditing ? (
                        <input
                            type="text"
                            name="name"
                            value={editableUser.name}
                            onChange={handleInputChange}
                            className="text-2xl font-bold text-gole-dark w-full border-b-2 border-gole-blue focus:outline-none bg-transparent"
                            aria-label={t('name')}
                         />
                    ) : (
                        <h2 className="text-2xl font-bold text-gole-dark">{editableUser.name}</h2>
                    )}
                    <p className={`mt-1 px-2 py-0.5 text-xs font-semibold rounded-full w-fit ${
                        editableUser.community === 'Women' ? 'bg-red-200 text-gole-red' : 
                        editableUser.community === 'Youth' ? 'bg-blue-200 text-gole-blue' :
                        'bg-green-200 text-gole-green'
                    }`}>{editableUser.community}</p>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="font-semibold text-gole-dark mb-2">{t('bio')}</h3>
                {isEditing ? (
                    <textarea 
                        name="bio"
                        value={editableUser.bio} 
                        onChange={handleInputChange} 
                        className="w-full h-24 p-2 border rounded-md focus:ring-2 focus:ring-gole-blue focus:outline-none"
                        aria-label="Edit bio"
                    />
                ) : (
                    <p className="text-gray-700">{editableUser.bio}</p>
                )}
            </div>

            <div className="mt-6">
                <h3 className="font-semibold text-gole-dark mb-2">{t('socialLinks')}</h3>
                {isEditing ? (
                    <div className="space-y-3">
                        <div>
                            <label className="text-sm font-medium text-gray-600 block">{t('twitter')}</label>
                            <input type="text" name="twitter" value={editableUser.socialLinks.twitter || ''} onChange={handleSocialChange} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-gole-blue focus:outline-none" />
                            {errors.twitter && <p className="text-red-500 text-xs mt-1">{errors.twitter}</p>}
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-600 block">{t('facebook')}</label>
                            <input type="text" name="facebook" value={editableUser.socialLinks.facebook || ''} onChange={handleSocialChange} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-gole-blue focus:outline-none" />
                            {errors.facebook && <p className="text-red-500 text-xs mt-1">{errors.facebook}</p>}
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-600 block">{t('instagram')}</label>
                            <input type="text" name="instagram" value={editableUser.socialLinks.instagram || ''} onChange={handleSocialChange} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-gole-blue focus:outline-none" />
                             {errors.instagram && <p className="text-red-500 text-xs mt-1">{errors.instagram}</p>}
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center space-x-4 text-gray-600">
                        {editableUser.socialLinks.twitter && <a href={editableUser.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-gole-blue"><TwitterIcon/></a>}
                        {editableUser.socialLinks.facebook && <a href={editableUser.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gole-blue"><FacebookIcon/></a>}
                        {editableUser.socialLinks.instagram && <a href={editableUser.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gole-blue"><InstagramIcon/></a>}
                        {!(editableUser.socialLinks.twitter || editableUser.socialLinks.facebook || editableUser.socialLinks.instagram) && <p className="text-sm text-gray-500">No social links provided.</p>}
                    </div>
                )}
            </div>
            
            <div className="mt-8 flex justify-end space-x-3">
                {isEditing ? (
                    <>
                        <button onClick={handleCancel} className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300">{t('cancel')}</button>
                        <button 
                            onClick={handleSave} 
                            disabled={!isFormValid}
                            className="px-4 py-2 text-sm font-semibold text-white bg-gole-green rounded-lg hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                          {t('save')}
                        </button>
                    </>
                ) : (
                   canEdit && <button onClick={() => setIsEditing(true)} className="px-4 py-2 text-sm font-semibold text-white bg-gole-blue rounded-lg hover:bg-blue-800">{t('editProfile')}</button>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
