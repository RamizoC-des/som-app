import { Language, TranslatedStrings, User, Post, Survey } from './types';

export const UI_STRINGS: TranslatedStrings = {
  appName: {
    [Language.EN]: 'Gole Kaab',
    [Language.SW]: 'Gole Kaab',
    [Language.SO]: 'Gole Kaab',
  },
  tagline: {
    [Language.EN]: 'Empowering Communities, Together.',
    [Language.SW]: 'Kuwawezesha Jamii, Pamoja.',
    [Language.SO]: 'Awoodsiinta Bulshada, Wadajir.',
  },
  // Login Page
  loginTitle: {
    [Language.EN]: 'Sign In to Your Account',
    [Language.SW]: 'Ingia Kwenye Akaunti Yako',
    [Language.SO]: 'Gal Koontadaada',
  },
  emailLabel: {
    [Language.EN]: 'Email Address',
    [Language.SW]: 'Anwani ya Barua Pepe',
    [Language.SO]: 'Cinwaanka iimaylka',
  },
  passwordLabel: {
    [Language.EN]: 'Password',
    [Language.SW]: 'Nenosiri',
    [Language.SO]: 'Furaha sirta ah',
  },
  signInButton: {
    [Language.EN]: 'Sign In',
    [Language.SW]: 'Ingia',
    [Language.SO]: 'Soo gal',
  },
  forgotPasswordLink: {
    [Language.EN]: 'Forgot Password?',
    [Language.SW]: 'Umesahau Nenosiri?',
    [Language.SO]: 'Ma ilowday erayga sirta ah?',
  },
  noAccount: {
    [Language.EN]: "Don't have an account?",
    [Language.SW]: 'Huna akaunti?',
    [Language.SO]: 'Akoon ma lihid?',
  },
  signUpLink: {
    [Language.EN]: 'Sign Up',
    [Language.SW]: 'Jisajili',
    [Language.SO]: 'Isdiiwaangeli',
  },

  // Sign Up Page
  signUpTitle: {
    [Language.EN]: 'Create a New Account',
    [Language.SW]: 'Fungua Akaunti Mpya',
    [Language.SO]: 'Abuur Akoon Cusub',
  },
  fullNameLabel: {
    [Language.EN]: 'Full Name',
    [Language.SW]: 'Jina Kamili',
    [Language.SO]: 'Magaca oo buuxa',
  },
  confirmPasswordLabel: {
    [Language.EN]: 'Confirm Password',
    [Language.SW]: 'Thibitisha Nenosiri',
    [Language.SO]: 'Xaqiiji erayga sirta ah',
  },
  communityLabel: {
    [Language.EN]: 'Select Your Community',
    [Language.SW]: 'Chagua Jamii Yako',
    [Language.SO]: 'Dooro Bulshadaada',
  },
  youthOption: {
    [Language.EN]: 'Youth',
    [Language.SW]: 'Vijana',
    [Language.SO]: 'Dhalinyaro',
  },
  womenOption: {
    [Language.EN]: 'Women',
    [Language.SW]: 'Wanawake',
    [Language.SO]: 'Haweenka',
  },
  pwdOption: {
    [Language.EN]: 'PWD',
    [Language.SW]: 'Wenye Ulemavu',
    [Language.SO]: 'Naafada',
  },
  signUpButton: {
    [Language.EN]: 'Sign Up',
    [Language.SW]: 'Jisajili',
    [Language.SO]: 'Isdiiwaangeli',
  },
  haveAccount: {
    [Language.EN]: 'Already have an account?',
    [Language.SW]: 'Tayari una akaunti?',
    [Language.SO]: 'Akoon ma leedahay?',
  },
  signInLink: {
    [Language.EN]: 'Sign In',
    [Language.SW]: 'Ingia',
    [Language.SO]: 'Soo gal',
  },

  // Forgot Password Page
  forgotPasswordTitle: {
    [Language.EN]: 'Reset Password',
    [Language.SW]: 'Weka upya Nenosiri',
    [Language.SO]: 'Dib u deji erayga sirta ah',
  },
  forgotPasswordInstructions: {
    [Language.EN]: 'Enter your email and we will send you a link to reset your password.',
    [Language.SW]: 'Weka barua pepe yako na tutakutumia kiungo cha kuweka upya nenosiri lako.',
    [Language.SO]: 'Geli iimaylkaaga waxaan kuu soo diri doonaa linkiga aad dib ugu dejisanayso eraygaaga sirta ah.',
  },
  sendResetLinkButton: {
    [Language.EN]: 'Send Reset Link',
    [Language.SW]: 'Tuma Kiungo cha Kuweka Upya',
    [Language.SO]: 'Dir Linkiga Dib u dejinta',
  },
  checkEmail: {
    [Language.EN]: 'Link sent! Please check your email.',
    [Language.SW]: 'Kiungo kimetumwa! Tafadhali angalia barua pepe yako.',
    [Language.SO]: 'Linkiga waa la diray! Fadlan hubi iimaylkaaga.',
  },
  backToSignIn: {
    [Language.EN]: 'Back to Sign In',
    [Language.SW]: 'Rudi Kuingia',
    [Language.SO]: 'Ku noqo Gelitaanka',
  },

  // Sidebar
  sidebarDashboard: {
    [Language.EN]: 'Dashboard',
    [Language.SW]: 'Dashibodi',
    [Language.SO]: 'Dashboard',
  },
  sidebarSurveys: {
    [Language.EN]: 'Surveys',
    [Language.SW]: 'Uchunguzi',
    [Language.SO]: 'Sahanno',
  },
  sidebarDataInsights: {
    [Language.EN]: 'Data Insights',
    [Language.SW]: 'Ufahamu wa Data',
    [Language.SO]: 'Xogta Fahamka',
  },

   // Surveys Page
  surveysTitle: {
    [Language.EN]: 'Community Surveys',
    [Language.SW]: 'Uchunguzi wa Jamii',
    [Language.SO]: 'Sahannada Bulshada',
  },
  createSurveyTitle: {
    [Language.EN]: 'Create a New Survey',
    [Language.SW]: 'Unda Uchunguzi Mpya',
    [Language.SO]: 'Abuur Sahamin Cusub',
  },
  surveyTitleLabel: {
    [Language.EN]: 'Survey Title',
    [Language.SW]: 'Kichwa cha Uchunguzi',
    [Language.SO]: 'Ciwaanka Sahanka',
  },
  surveyQuestionLabel: {
    [Language.EN]: 'Survey Question',
    [Language.SW]: 'Swali la Uchunguzi',
    [Language.SO]: 'Su\'aasha Sahanka',
  },
  surveyOptionsLabel: {
    [Language.EN]: 'Options',
    [Language.SW]: 'Chaguzi',
    [Language.SO]: 'Xulashooyinka',
  },
  addOptionButton: {
    [Language.EN]: 'Add Option',
    [Language.SW]: 'Ongeza Chaguo',
    [Language.SO]: 'Ku dar Doorasho',
  },
  createSurveyButton: {
    [Language.EN]: 'Create Survey',
    [Language.SW]: 'Unda Uchunguzi',
    [Language.SO]: 'Abuur Sahan',
  },
  yourSurveysTitle: {
    [Language.EN]: 'Active Surveys',
    [Language.SW]: 'Uchunguzi Hai',
    [Language.SO]: 'Sahannada Firfircoon',
  },

  // Data Insights Page
  dataInsightsTitle: {
    [Language.EN]: 'Data Insights & Trends',
    [Language.SW]: 'Ufahamu na Mwenendo wa Data',
    [Language.SO]: 'Fahamka Xogta & Isbeddellada',
  },
  dataInsightsDescription: {
    [Language.EN]: 'AI-generated summaries and visualizations from community-uploaded data.',
    [Language.SW]: 'Muhtasari na taswira zinazozalishwa na AI kutoka kwa data iliyopakiwa na jamii.',
    [Language.SO]: 'Soo koobidda AI-soo-saarka iyo aragtiyaha xogta ay bulshadu soo gelisay.',
  },
  generateNewInsightButton: {
    [Language.EN]: 'Generate New Insight',
    [Language.SW]: 'Tengeneza Ufahamu Mpya',
    [Language.SO]: 'Soo Saar Arrin Cusub',
  },
  generatingInsights: {
    [Language.EN]: 'Generating new insights...',
    [Language.SW]: 'Inatengeneza ufahamu mpya...',
    [Language.SO]: 'Soo saarista aragtiyo cusub...',
  },
  insightTitle1: {
    [Language.EN]: 'Youth Engagement Trends - Q2',
    [Language.SW]: 'Mwenendo wa Ushiriki wa Vijana - R2',
    [Language.SO]: 'Isbeddellada Ka-qaybgalka Dhallinyarada - Q2',
  },
  insightSummary1: {
    [Language.EN]: 'AI Analysis: Youth participation peaked in May, driven by digital literacy workshops. Engagement in sports-related activities saw a 15% decline, suggesting a need for program diversification.',
    [Language.SW]: 'Uchambuzi wa AI: Ushiriki wa vijana ulifikia kilele mwezi Mei, ukichangiwa na warsha za elimu ya kidijitali. Ushiriki katika shughuli za michezo ulipungua kwa 15%, ikipendekeza hitaji la mseto wa programu.',
    [Language.SO]: 'Falanqaynta AI: Ka-qaybgalka dhallinyaradu wuxuu gaaray heerkii ugu sarreeyey bishii Maajo, oo ay horseed u ahaayeen aqoon-is-weydaarsiyo xagga aqoonta dhijitaalka ah. Ka-qaybgalka hawlaha la xiriira isboortiga ayaa hoos u dhacay 15%, taasoo soo jeedinaysa baahida loo qabo kala-duwanaanta barnaamijka.',
  },
  insightTitle2: {
    [Language.EN]: 'Women\'s Economic Activity Heatmap',
    [Language.SW]: 'Ramani ya Joto ya Shughuli za Kiuchumi za Wanawake',
    [Language.SO]: 'Khariidadda Kulaylka ee Dhaqdhaqaaqa Dhaqaale ee Haweenka',
  },
  insightSummary2: {
    [Language.EN]: 'AI Analysis: Reports indicate a high concentration of women-led agricultural initiatives in coastal regions. There is a significant opportunity for micro-financing programs in central districts, where economic activity is lower.',
    [Language.SW]: 'Uchambuzi wa AI: Ripoti zinaonyesha mkusanyiko mkubwa wa mipango ya kilimo inayoongozwa na wanawake katika maeneo ya pwani. Kuna fursa kubwa ya programu za ufadhili mdogo katika wilaya za kati, ambapo shughuli za kiuchumi ziko chini.',
    [Language.SO]: 'Falanqaynta AI: Warbixinnadu waxay muujinayaan uruurin sare oo ah hindisayaal beeraley ah oo ay haweenku hoggaaminayaan ee gobollada xeebaha. Waxaa jira fursad weyn oo loogu talagalay barnaamijyada maalgelinta yar yar ee degmooyinka dhexe, halkaas oo dhaqdhaqaaqa dhaqaale uu hooseeyo.',
  },
  
  // Welcome Card
  welcomeTitle: {
    [Language.EN]: 'Welcome to Gole Kaab!',
    [Language.SW]: 'Karibu Gole Kaab!',
    [Language.SO]: 'Ku soo dhawoow Gole Kaab!',
  },
  welcomeIntro: {
    [Language.EN]: 'Your all-in-one platform for community empowerment, data sharing, and AI-driven insights. Here’s how you can leverage our key features:',
    [Language.SW]: 'Jukwaa lako la yote kwa moja kwa uwezeshaji wa jamii, kushiriki data, na ufahamu unaoendeshwa na AI. Hivi ndivyo unavyoweza kutumia vipengele vyetu muhimu:',
    [Language.SO]: 'Madashaada oo dhan-hal-hal ah ee awoodsiinta bulshada, wadaagga xogta, iyo aragtiyaha ay AI-wado. Waa kan sida aad uga faa\'iidaysan karto sifooyinkayaga muhiimka ah:',
  },
  aiCommentsTitle: {
    [Language.EN]: 'AI-Powered Comments & Interaction',
    [Language.SW]: 'Maoni na Mwingiliano unaoendeshwa na AI',
    [Language.SO]: 'Faallooyinka & Isdhexgalka AI-ku-shaqeeya',
  },
  aiCommentsDesc: {
    [Language.EN]: 'Engage in dynamic discussions with AI-assisted feedback, content summarization, and automated FAQ responses. Our system supports emoji reactions and voice comments, ensuring inclusive and accessible communication for everyone.',
    [Language.SW]: 'Shiriki katika majadiliano yenye nguvu na maoni yanayosaidiwa na AI, ufupisho wa maudhui, na majibu ya Maswali Yanayoulizwa Mara kwa Mara. Mfumo wetu unaauni miitikio ya emoji na maoni ya sauti, ukihakikisha mawasiliano jumuishi na yanayofikika kwa kila mtu.',
    [Language.SO]: 'Ka qaybqaado doodaha firfircoon ee leh jawaab celin AI-caawinaysa, soo koobidda nuxurka, iyo jawaabaha FAQ ee tooska ah. Nidaamkayagu wuxuu taageeraa falcelinta emoji iyo faallooyinka codka, isagoo hubinaya isgaarsiin loo dhan yahay oo la heli karo qof walba.',
  },
  offlineResearchTitle: {
    [Language.EN]: 'Online/Offline Research Capability',
    [Language.SW]: 'Uwezo wa Utafiti Mtandaoni/Nje ya Mtandao',
    [Language.SO]: 'Awoodda Cilmi-baarista ee Online/Offline',
  },
  offlineResearchDesc: {
    [Language.EN]: 'Create and participate in surveys and polls even without an internet connection. Your responses will automatically sync when you reconnect. Utilize our AI tools for advanced data filtering and analysis, or integrate with platforms like KoboToolbox for extended research projects.',
    [Language.SW]: 'Unda na ushiriki katika tafiti na kura za maoni hata bila muunganisho wa intaneti. Majibu yako yatasawazishwa kiotomatiki utakapo ungana tena. Tumia zana zetu za AI kwa uchujaji na uchambuzi wa data wa hali ya juu, au unganisha na majukwaa kama KoboToolbox kwa miradi ya utafiti iliyopanuliwa.',
    [Language.SO]: 'Abuur oo ka qaybqaado sahannada iyo codbixinta xitaa adiga oo aan lahayn xiriir internet. Jawaabahaagu si toos ah ayay isu-dubbaridi doonaan markaad dib u xirto. U isticmaal qalabkayaga AI sifaynta iyo falanqaynta xogta horumarsan, ama la-midoobo aaladaha sida KoboToolbox mashaariicda cilmi-baarista ee la dheereeyey.',
  },

  // Profile Card
  yourProfile: {
    [Language.EN]: 'Your Profile',
    [Language.SW]: 'Wasifu Wako',
    [Language.SO]: 'Profile-kaaga',
  },
  edit: {
    [Language.EN]: 'Edit',
    [Language.SW]: 'Hariri',
    [Language.SO]: 'Wax ka beddel',
  },
  saveChanges: {
    [Language.EN]: 'Save Changes',
    [Language.SW]: 'Hifadhi Mabadiliko',
    [Language.SO]: 'Kaydi Isbedelada',
  },
  changePicture: {
    [Language.EN]: 'Change Picture',
    [Language.SW]: 'Badilisha Picha',
    [Language.SO]: 'Beddel Sawirka',
  },
  name: {
    [Language.EN]: 'Name',
    [Language.SW]: 'Jina',
    [Language.SO]: 'Magac',
  },


  // Original Strings for reference
  sendLinkButton: {
    [Language.EN]: 'Send Login Link',
    [Language.SW]: 'Tuma Kiungo cha Kuingia',
    [Language.SO]: 'Dir Linkiga Gelitaanka',
  },
  loginFromEmailButton: {
    [Language.EN]: 'Click here to login (Simulated)',
    [Language.SW]: 'Bofya hapa kuingia (Imeigwa)',
    [Language.SO]: 'Halkan guji si aad u gasho (Jilid)',
  },
  logout: {
    [Language.EN]: 'Logout',
    [Language.SW]: 'Toka',
    [Language.SO]: 'Ka bax',
  },
  dashboard: {
    [Language.EN]: 'Dashboard',
    [Language.SW]: 'Dashibodi',
    [Language.SO]: 'Dashboor',
  },
  communityGrowth: {
    [Language.EN]: 'Community Growth',
    [Language.SW]: 'Ukuaji wa Jamii',
    [Language.SO]: 'Kobaca Bulshada',
  },
  activeUsers: {
    [Language.EN]: 'Active Users',
    [Language.SW]: 'Watumiaji Hai',
    [Language.SO]: 'Isticmaalayaasha Firfircoon',
  },
  reportsUploaded: {
    [Language.EN]: 'Reports Uploaded',
    [Language.SW]: 'Ripoti Zilizopakiwa',
    [Language.SO]: 'Warbixinnada la soo galiyay',
  },
  engagementRate: {
    [Language.EN]: 'Engagement Rate',
    [Language.SW]: 'Kiwango cha Ushiriki',
    [Language.SO]: 'Heerka Ka-qaybgalka',
  },
  participationTrends: {
    [Language.EN]: 'Participation Trends by Community',
    [Language.SW]: 'Mwenendo wa Ushiriki kwa Jamii',
    [Language.SO]: 'Isbeddellada Ka-qaybgalka ee Bulshada',
  },
  uploadData: {
    [Language.EN]: 'Upload Data & Documents',
    [Language.SW]: 'Pakia Data na Nyaraka',
    [Language.SO]: 'Soo Geli Xogta & Dukumentiyada',
  },
  uploadHint: {
    [Language.EN]: 'Upload reports, videos, pictures, or audio files.',
    [Language.SW]: 'Pakia ripoti, video, picha, au faili za sauti.',
    [Language.SO]: 'Soo geli warbixinno, fiidiyowyo, sawirro, ama faylal maqal ah.',
  },
  selectFile: {
    [Language.EN]: 'Select file',
    [Language.SW]: 'Chagua faili',
    [Language.SO]: 'Dooro faylka',
  },
  uploading: {
    [Language.EN]: 'Uploading...',
    [Language.SW]: 'Inapakia...',
    [Language.SO]: 'Soo dejinaya...',
  },
  uploadComplete: {
    [Language.EN]: 'Upload Complete!',
    [Language.SW]: 'Upakiaji umekamilika!',
    [Language.SO]: 'Soo dejintu way dhammaatay!',
  },
  generateSummary: {
    [Language.EN]: 'Generate AI Summary',
    [Language.SW]: 'Tengeneza Muhtasari wa AI',
    [Language.SO]: 'Soo Saar Soo Koobid AI',
  },
  communityFeed: {
    [Language.EN]: 'Community Feed',
    [Language.SW]: 'Mlisho wa Jamii',
    [Language.SO]: 'Quudinta Bulshada',
  },
  addComment: {
    [Language.EN]: 'Add a comment...',
    [Language.SW]: 'Andika maoni...',
    [Language.SO]: 'Faallo ku dar...',
  },
  commentAction: {
    [Language.EN]: 'Comment',
    [Language.SW]: 'Toa Maoni',
    [Language.SO]: 'Faallo',
  },
  translate: {
    [Language.EN]: 'Translate',
    [Language.SW]: 'Tafsiri',
    [Language.SO]: 'Turjun',
  },
  generating: {
    [Language.EN]: 'Generating...',
    [Language.SW]: 'Inatengeneza...',
    [Language.SO]: 'Abuuraya...',
  },
  editProfile: {
    [Language.EN]: 'Edit Profile',
    [Language.SW]: 'Hariri Wasifu',
    [Language.SO]: 'Wax ka beddel Profile-ka',
  },
  bio: {
    [Language.EN]: 'Bio',
    [Language.SW]: 'Wasifu',
    [Language.SO]: 'Taariikh nololeed',
  },
  socialLinks: {
    [Language.EN]: 'Social Links',
    [Language.SW]: 'Viungo vya Kijamii',
    [Language.SO]: 'Xiriirada Bulshada',
  },
  twitter: {
    [Language.EN]: 'Twitter URL',
    [Language.SW]: 'URL ya Twitter',
    [Language.SO]: 'URL-ka Twitter',
  },
  facebook: {
    [Language.EN]: 'Facebook URL',
    [Language.SW]: 'URL ya Facebook',
    [Language.SO]: 'URL-ka Facebook',
  },
  instagram: {
    [Language.EN]: 'Instagram URL',
    [Language.SW]: 'URL ya Instagram',
    [Language.SO]: 'URL-ka Instagram',
  },
  save: {
    [Language.EN]: 'Save',
    [Language.SW]: 'Hifadhi',
    [Language.SO]: 'Kaydi',
  },
  cancel: {
    [Language.EN]: 'Cancel',
    [Language.SW]: 'Ghairi',
    [Language.SO]: 'Jooji',
  },
  invalidUrl: {
    [Language.EN]: 'Please enter a valid URL.',
    [Language.SW]: 'Tafadhali weka URL halali.',
    [Language.SO]: 'Fadlan geli URL sax ah.',
  },
  // New Strings for Feed enhancements
  createPost: {
    [Language.EN]: 'Create Post',
    [Language.SW]: 'Tengeneza Chapisho',
    [Language.SO]: 'Abuur Boost',
  },
  whatsOnYourMind: {
    [Language.EN]: "What's on your mind?",
    [Language.SW]: 'Unafikiria nini?',
    [Language.SO]: 'Maxaa maskaxdaada ku jira?',
  },
  pollQuestion: {
    [Language.EN]: 'Poll Question...',
    [Language.SW]: 'Swali la Kura...',
    [Language.SO]: 'Su\'aasha Codbixinta...',
  },
  option: {
    [Language.EN]: 'Option',
    [Language.SW]: 'Chaguo',
    [Language.SO]: 'Doorasho',
  },
  addOption: {
    [Language.EN]: 'Add Option',
    [Language.SW]: 'Ongeza Chaguo',
    [Language.SO]: 'Ku dar Doorasho',
  },
  post: {
    [Language.EN]: 'Post',
    [Language.SW]: 'Chapisha',
    [Language.SO]: 'Boost',
  },
  poll: {
    [Language.EN]: 'Poll',
    [Language.SW]: 'Kura',
    [Language.SO]: 'Codbixin',
  },
  askAI: {
    [Language.EN]: 'Ask AI',
    [Language.SW]: 'Uliza AI',
    [Language.SO]: 'Waydii AI',
  },
  analyzing: {
    [Language.EN]: 'Analyzing...',
    [Language.SW]: 'Inachambua...',
    [Language.SO]: 'Falanqaynaya...',
  },
  like: {
    [Language.EN]: 'Like',
    [Language.SW]: 'Penda',
    [Language.SO]: 'Jeclow',
  },
  share: {
    [Language.EN]: 'Share',
    [Language.SW]: 'Shiriki',
    [Language.SO]: 'La wadaag',
  },
  vote: {
    [Language.EN]: 'Vote',
    [Language.SW]: 'Piga Kura',
    [Language.SO]: 'Codayn',
  },
  shareOn: {
    [Language.EN]: 'Share on',
    [Language.SW]: 'Shiriki kwenye',
    [Language.SO]: 'Ku wadaag',
  },
  likesCount: {
    [Language.EN]: 'Likes',
    [Language.SW]: 'Wapendao',
    [Language.SO]: 'Jecel',
  },
  sharesCount: {
    [Language.EN]: 'Shares',
    [Language.SW]: 'Walioshiriki',
    [Language.SO]: 'La wadaagay',
  },
  commentsCount: {
    [Language.EN]: 'Comments',
    [Language.SW]: 'Maoni',
    [Language.SO]: 'Faallooyin',
  },
};

// FIX: Export MOCK_USERS to be used in other modules.
export const MOCK_USERS: { [key: string]: User } = {
  currentUser: {
    id: 'current',
    name: 'Samira',
    avatar: 'https://picsum.photos/seed/samira/100/100',
    community: 'Youth',
    bio: 'Tech enthusiast and community builder from Somalia, passionate about using technology to create opportunities for youth.',
    socialLinks: {
        twitter: 'https://twitter.com/samira',
        instagram: 'https://instagram.com/samira'
    }
  },
  user1: { 
    id: '1', 
    name: 'Asha', 
    avatar: 'https://picsum.photos/seed/asha/100/100', 
    community: 'Women',
    bio: 'Passionate advocate for women\'s empowerment and sustainable agriculture. Based in rural Kenya.',
    socialLinks: {
      twitter: 'https://twitter.com/asha',
      facebook: 'https://facebook.com/asha',
    }
  },
  user2: { 
    id: '2', 
    name: 'Juma', 
    avatar: 'https://picsum.photos/seed/juma/100/100', 
    community: 'Youth',
    bio: 'Community organizer focused on youth engagement and environmental conservation. Let\'s make a change!',
    socialLinks: {
      instagram: 'https://instagram.com/juma',
    }
  },
  user3: { 
    id: '3', 
    name: 'Fatima', 
    avatar: 'https://picsum.photos/seed/fatima/100/100', 
    community: 'PWD',
    bio: 'Working to improve accessibility and inclusion for persons with disabilities in Mogadishu.',
    socialLinks: {
      twitter: 'https://twitter.com/fatima',
    }
  },
  aiBot: { 
    id: 'ai', 
    name: 'Gole Kaab AI', 
    avatar: 'https://picsum.photos/seed/ai/100/100', 
    community: 'Youth',
    bio: 'I am an AI assistant here to provide insights and summaries for the Gole Kaab community.',
    socialLinks: {}
  }
};

export const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    user: MOCK_USERS.user1,
    type: 'image',
    content: 'Sharing a photo from our recent community workshop on sustainable farming in rural Kenya. The resilience and knowledge of the women here are truly inspiring.',
    imageUrl: 'https://picsum.photos/seed/kenya-women/600/400',
    createdAt: '2 hours ago',
    likes: ['2', '3'],
    shares: 5,
    comments: [
      { id: 'c1', user: MOCK_USERS.user2, content: 'This looks amazing! Great work.' },
      { id: 'c2', user: MOCK_USERS.aiBot, isAI: true, content: 'Insight: Community workshops have shown a 30% increase in local crop yields. Keep up the great work!' },
    ],
  },
  {
    id: 'p2',
    user: MOCK_USERS.user3,
    type: 'report',
    content: 'Here is the quarterly report on accessibility improvements for persons with disabilities in Mogadishu. Key findings include better ramp access in public buildings, but challenges remain in public transport.',
    createdAt: '1 day ago',
    likes: ['1'],
    shares: 2,
    comments: [],
  },
  {
    id: 'p4',
    user: MOCK_USERS.user2,
    type: 'poll',
    content: 'What should be the main focus for our next youth community project?',
    pollOptions: [
      { id: 'o1', text: 'Coastal Cleanup Drive', votes: ['1', '3'] },
      { id: 'o2', text: 'Digital Literacy Workshops', votes: ['2'] },
      { id: 'o3', text: 'Sports Tournament', votes: [] },
    ],
    createdAt: '3 days ago',
    likes: ['1', '3'],
    shares: 10,
    comments: [],
  },
];

export const MOCK_SURVEYS: Survey[] = [
  {
    id: 's1',
    title: 'Community Health Priorities',
    question: 'What is the most important health issue in our community?',
    createdBy: '1',
    options: [
      { id: 's1o1', text: 'Access to Clean Water', votes: 120 },
      { id: 's1o2', text: 'Maternal Healthcare', votes: 85 },
      { id: 's1o3', text: 'Vaccination Programs', votes: 60 },
    ],
  },
  {
    id: 's2',
    title: 'Youth Employment Skills',
    question: 'Which skill development program would be most beneficial for you?',
    createdBy: '2',
    options: [
      { id: 's2o1', text: 'Digital Marketing', votes: 95 },
      { id: 's2o2', text: 'English Language', votes: 150 },
      { id: 's2o3', text: 'Financial Literacy', votes: 110 },
      { id: 's2o4', text: 'Vocational Trades', votes: 75 },
    ],
  },
];