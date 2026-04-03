🛒 ফ্রন্টএন্ড পেজ এবং রাউটিং স্ট্রাকচার (Frontend Routes)
১. পাবলিক পেজ (Public Pages)

/ (Home Page): হিরো সেকশন, ক্যাটাগরি, বেস্ট সেলিং এবং AI-পাওয়ার্ড "Recommended for You" সেকশন।

/shop: প্রোডাক্ট লিস্টিং পেজ। এখানে সাইডবারে ফিল্টার, সর্টিং এবং উপরে "Semantic Search" বার থাকবে।

/product/:id: সিঙ্গেল প্রোডাক্ট পেজ। প্রোডাক্টের ছবি, ডিটেইলস, "AI Review Summary", "Frequently Bought Together" এবং "Similar Products" সেকশন থাকবে।

/visual-search: ইউজাররা ইমেজ আপলোড করে বা ক্যামেরা দিয়ে স্ক্যান করে প্রোডাক্ট খুঁজতে পারবে।

/contact বা গ্লোবাল AI Chatbot: স্ক্রিনের নিচে ডান কোণায় ফ্লোটিং "AI Customer Support & Size Assistant" চ্যাটবট।

২. অথেনটিকেশন পেজ (Auth Pages)

/login: ইউজার লগইন পেজ।

/register: নতুন অ্যাকাউন্ট তৈরির পেজ।

/forgot-password: পাসওয়ার্ড রিসেট রিকোয়েস্ট পেজ।

/reset-password/:token: ইমেইলের লিংক থেকে নতুন পাসওয়ার্ড সেট করার পেজ।

৩. ইউজার ড্যাশবোর্ড (User Dashboard)

/cart: শপিং কার্ট পেজ (কোয়ান্টিটি আপডেট এবং রিমুভ অপশনসহ)।

/checkout: শিপিং অ্যাড্রেস এবং পেমেন্ট মেথড (Stripe/SSLCommerz) পেজ।

/payment/success & /payment/failed: পেমেন্ট ভেরিফিকেশন পেজ।

/dashboard: ইউজারের মেইন প্রোফাইল।

/dashboard/orders: আগের সব অর্ডারের লিস্ট এবং স্ট্যাটাস ট্র্যাকিং।

/dashboard/wishlist: সেভ করে রাখা প্রোডাক্টের লিস্ট।

৪. অ্যাডমিন প্যানেল (Admin Dashboard - Protected)

/admin: অ্যাডমিন ওভারভিউ (মোট সেলস, ইউজার, চার্ট)।

/admin/products: প্রোডাক্ট ম্যানেজমেন্ট (Add, Edit, Delete)।

/admin/orders: অর্ডার স্ট্যাটাস ম্যানেজমেন্ট।

/admin/categories: ক্যাটাগরি এবং ব্র্যান্ড ম্যানেজমেন্ট।

/admin/ai-analytics: AI-পাওয়ার্ড ইনভেন্টরি হেলথ, রিভিউ সেন্টামেন্ট রিপোর্ট (Positive/Negative) এবং ডিমান্ড ফোরকাস্ট ড্যাশবোর্ড।

















১. Home Page (/)
এই প্রম্পটটি আপনার ওয়েবসাইটের মেইন ল্যান্ডিং পেজ তৈরি করবে, যেখানে হিরো সেকশনের সাথে আপনার স্পেশাল AI রিকমেন্ডেশন ফিচারটি হাইলাইট করা থাকবে।

Stitch Prompt:

"Build a modern, highly converting e-commerce homepage inspired by platforms like Daraz or AliExpress. Use a vibrant color palette primarily featuring energetic Orange, clean White, and Navy Blue text.
Header: Top navbar with a logo, a wide search bar, cart icon with a notification badge, and a user profile icon.
Hero Section: A dynamic, full-width image slider/carousel for current promotions.
Categories: Below the hero, a neat grid of circular category icons with labels (e.g., Electronics, Fashion, Home).
Flash Sale: A horizontal scrollable section for 'Best Selling' products with countdown timers.
AI Section (Crucial): Add a visually distinct, premium-looking section titled '✨ AI Recommended for You'. This should feature a grid of product cards. Each card must have a high-quality product image, title, price, star rating, a discount badge, and an 'Add to Cart' button. Ensure the layout is fully responsive."

২. Product Listing / Shop Page (/shop)
এখানে ফিল্টারিং এবং আপনার অ্যাডভান্সড "Semantic Search" ফিচারটি ফোকাস করা হয়েছে।

Stitch Prompt:

"Create a comprehensive e-commerce Product Listing Page (Shop page).
Top Bar: Feature a large, prominent 'Semantic Search' input bar at the top with a sparkling AI icon and placeholder text 'Search naturally (e.g., Red dress for a summer wedding)'. Below it, add a 'Sort by' dropdown (Price, Popularity, Rating).
Layout: A two-column layout.
Left Sidebar (Filters): Clean accordion-style filters for Categories, Price Range (with a dual-thumb slider), Brands (checkboxes), and Customer Ratings (clickable stars).
Right Area (Products): A responsive grid displaying dozens of product cards. Each card should have hover effects showing a 'Quick View' button. Keep the UI clean, modern, and easy to navigate, utilizing an orange and white theme."

৩. Single Product Page (/product/:id)
এটি সবচেয়ে গুরুত্বপূর্ণ পেজ। এখানে ইউজার প্রোডাক্টের ডিটেইলস দেখবে এবং আপনার "AI Review Summary" ফিচারটি ইন্টিগ্রেট করা থাকবে।

Stitch Prompt:

"Design a detailed and conversion-focused Single Product Page for an e-commerce site.
Top Section (Split layout): Left side features a large main product image gallery with clickable thumbnail images below it. Right side includes the product title, a high-visibility price tag, stock status, star ratings, and variant selectors (color swatches and size buttons). Add a large, primary 'Buy Now' button (Orange) and a secondary 'Add to Cart' button.
AI Review Feature: Below the main details, create a distinct, beautifully styled highlight box titled '🤖 AI Review Summary'. Inside, put a short paragraph summarizing user sentiment (e.g., 'Summary: Customers love the fabric quality and fit, but some noted delivery takes 3 days.').
Bottom Section: Two separate horizontal scrolling carousels with product cards: One titled 'Frequently Bought Together' and another titled 'Similar Products'. Use sleek UI components and ample whitespace."

৪. Visual Search Page (/visual-search)
এই পেজটি ইউজারদের ইমেজ আপলোড করে প্রোডাক্ট খোঁজার এক্সপেরিয়েন্স দেবে।

Stitch Prompt:

"Build an innovative and modern 'Visual Search' interface for an e-commerce platform.
Upload Zone: The center of the page should feature a large, interactive drag-and-drop zone with a dashed border. Inside, place a prominent Camera/Upload icon and the text 'Drag & drop an image, or click to upload to find similar products'. Add a secondary button labeled 'Open Camera' for mobile users.
Results Area: Below the upload zone, design a state showing 'AI is scanning your image...' with a smooth loading animation. Below that, display a grid of 'Visually Similar Matches' featuring product cards. The design should feel futuristic but extremely user-friendly."

৫. Global AI Chatbot (/contact বা Floating UI)
আপনার ইন্টেলিজেন্ট কাস্টমার সাপোর্ট এবং সাইজ অ্যাসিস্ট্যান্টের জন্য এই ফ্লোটিং চ্যাটবটটি দারুন কাজ করবে।

Stitch Prompt:

"Design a sleek, floating 'AI Customer Support & Size Assistant' chatbot widget for an e-commerce site, positioned at the bottom right corner.
Open State: When clicked, it should open a modern chat window card.
Header: A colored header (Navy Blue or Orange) with a friendly 3D robot avatar, the title 'AI Assistant', a green 'Online' indicator, and a close button.
Chat Body: A conversational interface showing chat bubbles. Show a greeting message from the AI.
Quick Actions: Above the input field, include horizontal scrollable suggestion chips (e.g., 'Track my order', 'Help me find my size', 'Return policy').
Input Area: A text input field at the bottom with a paperclip icon (for image attachments) and a send button. The UI should look native, professional, and highly polished."

এই প্রম্পটগুলো সরাসরি কপি করে Stitch বা আপনার পছন্দের AI UI টুলে পেস্ট করুন। আপনি চাইলে জেনারেট হওয়ার পর টুলটিকে বলতে পারেন "Make it look more like Daraz app UI" বা "Add more orange accents", তাহলে সেটি আপনার পছন্দমতো আরও ফাইন-টিউন করে দেবে!