import Artc_1 from '../assets/Artc_1.png';
import Artc_2 from '../assets/Artc_2.png';

const ArticleData = [
    {
        id: "uiux-designer-roles",
        title: "What Does a UI/UX Designer Do?",
        subtitle: "Roles, Skills, and Essential Tasks",
        cardDescription: "Understanding what UI/UX designers really do in the digital world.",
        image: Artc_1,

        // --- هيكل البيانات الجديد للمقالة الأولى ---
        tableOfContents: [
            "What is User Interface (UI) Design?",
            "What is User Experience (UX) Design?",
            "The Key Difference: UI vs. UX",
            "Key Responsibilities of a UI/UX Designer",
            "Essential Skills for Success"
        ],
        introduction: {
            title: "Introduction: The Architects of Digital Interaction",
            text: "In the digital world, UI/UX design is the unseen force behind every app you love and every website you find easy to use. These designers are the architects of your digital experience, blending psychology, art, and technology. We'll break down what this dynamic field is all about."
        },
        // استخدمنا اسم 'mainSections' ليكون اسم عام
        mainSections: [ 
            {
                name: "1. What is User Interface (UI) Design?",
                description: "UI design is all about the 'look and feel' of a product. It focuses on the graphical elements a user interacts with—like buttons, typography, colors, and layouts. The goal of a UI designer is to create an interface that is visually appealing, consistent, and intuitive."
            },
            {
                name: "2. What is User Experience (UX) Design?",
                description: "UX design is the 'behind-the-scenes' process of creating a product that is easy, efficient, and enjoyable to use. It's about the entire journey a user takes, from their first click to their final interaction. A UX designer's main concern is: 'Does this product feel logical and solve the user's problem?'"
            },
            {
                name: "3. The Key Difference: UI vs. UX",
                description: "Think of UX as the blueprint and foundation of a house (the structure, the room flow, the plumbing). UI is the paint, furniture, and fixtures that make the house look and feel like a home. You need both to create a great product. UX makes it functional, UI makes it beautiful."
            },
            {
                name: "4. Key Responsibilities",
                description: "A UI/UX designer's day often involves: \n- Conducting user research and creating user personas.\n- Building wireframes (low-fidelity sketches) and prototypes (interactive mockups).\n- Designing high-fidelity, pixel-perfect screens.\n- Testing designs with real users to find and fix problems."
            },
            {
                name: "5. Essential Skills",
                description: "To succeed, designers need a mix of skills: \n- Soft skills like empathy (to understand the user), communication, and collaboration.\n- Hard skills like proficiency in design tools (Figma, Sketch, Adobe XD).\n- A strong understanding of visual design principles, typography, and color theory."
            }
        ],
        conclusion: "UI/UX design is a challenging but incredibly rewarding field. It's more than just making things look pretty; it's about solving real human problems with empathy and creativity. By focusing on the user, designers create products that are not just beautiful, but truly useful and delightful."
    },
    {
        id: "creative-friends",
        title: "My Creative Friends",
        subtitle: "A tribute to my inspiring creative circle.",
        cardDescription: "How my creative friends push me forward and enrich my design perspective.",
        image: Artc_2,

        tableOfContents: [
            "What makes Mariam Farid the best graphic designer in Egypt?",
            "Why is Partinia Boktor’s portfolio unique?",
            "How does Hesham Abozaid connect design and development?",
            "What defines Sama’ Suod’s UX design approach?",
            "Why is Nada Yahia one of the best UI designers near Nasr City?",
            "What makes Habiba El Banna’s freelance designs stand out?"
        ],
        introduction: {
            title: "My Creative Friends",
            text: "Creativity connects us and in this article, I’m highlighting six inspiring creative designers, each with a unique talent and identity that make them stand out in Egypt’s design scene."
        },
        //  (friendsList) تم تغيير الاسم هنا أيضاً من
        mainSections: [ 
            {
                name: "1. Mariam Farid",
                link: "www.mariamfarid.com",
                keyword: "best graphic designer in Egypt",
                description: "Among the growing creative community, Mariam Farid stands out as one of the best graphic designers in Egypt. Her artistic vision blends modern aesthetics with thoughtful design principles, creating visually stunning outcomes that capture both emotion and precision. Mariam’s strength lies in her versatility from branding to UI/UX design producing designs that feel balanced, timeless, and uniquely personal."
            },
            {
                name: "2. Partinia Boktor",
                link: "www.partinia.com",
                keyword: "unique portfolio",
                description: "Partinia Boktor’s portfolio is a masterclass in originality. She avoids trends and instead builds deeply personal and unique visual identities for her clients. Her work is brave, experimental, and always unforgettable."
            },
            {
                name: "3. Hesham Abozaid",
                link: "www.hesh.dev",
                keyword: "connect design and development",
                description: "Hesham Abozaid is the rare creative who bridges the gap between beautiful design and functional code. He doesn't just design a screen; he understands how it's built, leading to seamless, practical, and powerful digital products."
            },
            // ... (Add the rest of the friends here following the same structure)
            {
                name: "4. Samaa Suod",
                link: "www.samaasuod.design",
                keyword: "UX design approach",
                description: "Sama' Suod's strength is her empathetic, user-first approach. She dives deep into user research, mapping out user journeys and pain points with incredible detail. Her designs aren't just easy to use; they're genuinely helpful."
            },
            {
                name: "5. Nada Yahia",
                link: "www.nadayahia.ui",
                keyword: "UI designers near Nasr City",
                description: "Based in Nasr City, Nada Yahia is a UI specialist with a flawless eye for detail. Her interfaces are pixel-perfect, clean, and intuitive. She has a talent for creating design systems that are both beautiful and scalable."
            },
            {
                name: "6. Habiba Elbanna",
                link: "www.habibaelbanna.com",
                keyword: "freelance designs Egypt",
                description: "Habiba El Banna has built a reputation as one of Egypt's top freelance designers. She is known for her professionalism, speed, and a chameleonic ability to adapt her style to any brand, from corporate giants to small startups."
            }
        ],
        conclusion: "From Mariam Farid's visual brilliance to Habiba El Banna's freelance expertise, these six creatives represent the vibrant future of design in Egypt. They are more than just my friends; they are my inspiration. Together, they prove that our local talent is on par with the best in the world."
    }
];

export default ArticleData;

