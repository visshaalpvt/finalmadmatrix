import ProfileCard from "./ProfileCard";
import { useEffect, useRef } from "react";

const TeamSection = () => {
    const teamMembers = [
        {
            name: "Dhanush Ravichandran",
            title: "Convener",
            handle: "dhanush_ravichandran_",
            status: "Authorized",
            avatarUrl: "/team/dhanush.jpg",
            instagram: "https://www.instagram.com/dhanush_ravichandran_?igsh=MTFxd2Jidm5udHRwdA==",
            linkedin: "https://www.linkedin.com/in/dhanush-ravichandran-b98650399?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            email: "dhanushrofficial@gmail.com",
            phone: "+91 9025718226"
        },
        {
            name: "Prasithikumaran S",
            title: "Coordinator",
            handle: "prasithi_kumaran",
            status: "Authorized",
            avatarUrl: "/team/prasithi.jpg",
            instagram: "https://www.instagram.com/prasithi_kumaran?igsh=MWJpeTBjM28wbTI1bg==",
            linkedin: "https://www.linkedin.com/in/prasithikumaran?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            email: "prasithikumarans@gmail.com",
            phone: "+91 8248372122"
        },
        {
            name: "A Infant",
            title: "Coordinator",
            handle: "infant_402",
            status: "Authorized",
            avatarUrl: "/team/infant.jpg",
            instagram: "https://www.instagram.com/infant_402?igsh=MTBuZ3J5Z3IzZzJ1Nw==",
            email: "infant049@gmail.com",
            phone: "+91 7548855208"
        },
        {
            name: "A. Kevin Mathew",
            title: "Organizer",
            handle: "kevin_mathew____",
            status: "Authorized",
            avatarUrl: "/team/kevin.jpg",
            instagram: "https://www.instagram.com/kevin_mathew____?igsh=MTZnd3hyZWoyMjVjYQ==",
            email: "kmathew20112005@gmail.com",
            phone: "+91 8610871590"
        },
        {
            name: "Nithishwaran J C",
            title: "Organizer",
            handle: "nithxs.__",
            status: "Authorized",
            avatarUrl: "/team/nithish.jpg",
            instagram: "https://www.instagram.com/nithxs.__?igsh=MTc2NjNqdHhsMm1mdg==",
            linkedin: "https://www.linkedin.com/in/nithish-waran-7ba7193a1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            email: "nithishog31@gmail.com",
            phone: "+91 8754330333"
        },
        {
            name: "Sugantharaj A",
            title: "Organizer",
            handle: "suganth_raj__",
            status: "Authorized",
            avatarUrl: "/team/suganth.jpg",
            instagram: "https://www.instagram.com/suganth_raj__?igsh=czM3ZHRzY2d5dmYz",
            email: "sugantharaj91@gmail.com",
            phone: "+91 9150184324"
        },
        {
            name: "K L Dinesh Eswar",
            title: "Organizer",
            handle: "kl_dinesh_eshwar",
            status: "Authorized",
            avatarUrl: "/team/dinesh.jpg",
            instagram: "https://www.instagram.com/kl_dinesh_eshwar?igsh=d3Jya2hpaTltczcy",
            email: "kldineshloka@gmail.com",
            phone: "+91 7200295986"
        }
    ];

    const facultyMember = {
        name: "Dr K Sudar Mozhi",
        title: "Assistant Professor SG",
        handle: "SIMATS Engineering, Chennai",
        status: "Faculty Coordinator",
        avatarUrl: "/team/faculty.jpg",
        email: "sudarmozhik@gmail.com"
    };

    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Ensure parent container and opacity
        if (sectionRef.current) {
            sectionRef.current.style.opacity = "1";
        }
    }, []);

    return (
        <section
            ref={sectionRef}
            id="team-section"
            className="relative z-10 py-[100px] flex flex-col items-center justify-center min-h-[800px] transition-opacity duration-1000"
        >
            <div className="max-w-[1440px] mx-auto px-4 w-full text-center">

                {/* Faculty Coordinator - AT THE TOP */}
                <div className="mb-20 flex flex-col items-center">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-[32px] font-bold text-matrix-red uppercase tracking-tighter font-poster">
                            Faculty Coordinator
                        </h2>
                        <div className="w-16 h-1 bg-matrix-red mx-auto shadow-[0_0_15px_rgba(255,0,0,0.6)]"></div>
                    </div>

                    <ProfileCard
                        {...facultyMember}
                        enableTilt={true}
                        showUserInfo={true}
                        showBehindGlow={true}
                        behindGlowColor="rgba(255, 50, 50, 0.7)"
                        customInnerGradient="linear-gradient(145deg, rgba(30, 0, 0, 0.95) 0%, rgba(60, 0, 0, 0.85) 100%)"
                        scale="1.1"
                    />
                </div>

                {/* Section Title for Students */}
                <div className="mb-24 space-y-4">
                    <h2 className="text-[40px] font-bold text-matrix-red uppercase tracking-tighter font-poster drop-shadow-[0_0_15px_rgba(255,0,0,0.4)]">
                        Student Core Team
                    </h2>
                    <div className="w-24 h-1 bg-matrix-red mx-auto shadow-[0_0_20px_rgba(255,0,0,0.8)]"></div>
                    <p className="text-white/60 font-matrix text-[11px] tracking-[0.6em] uppercase font-black">Authorized Personnel Only</p>
                </div>

                {/* Team Grid - Balanced 4 + 3 Layout */}
                <div className="space-y-[60px] mb-32">
                    {/* Row 1: 4 Members */}
                    <div className="flex flex-wrap justify-center gap-[40px] items-stretch">
                        {teamMembers.slice(0, 4).map((member, index) => (
                            <ProfileCard
                                key={index}
                                {...member}
                                enableTilt={true}
                                showUserInfo={true}
                                showBehindGlow={true}
                                behindGlowColor="rgba(255, 0, 0, 0.6)"
                                customInnerGradient="linear-gradient(145deg, rgba(40, 0, 0, 0.98) 0%, rgba(10, 0, 0, 0.95) 100%)"
                            />
                        ))}
                    </div>

                    {/* Row 2: 3 Members */}
                    <div className="flex flex-wrap justify-center gap-[40px] items-stretch">
                        {teamMembers.slice(4, 7).map((member, index) => (
                            <ProfileCard
                                key={index + 4}
                                {...member}
                                enableTilt={true}
                                showUserInfo={true}
                                showBehindGlow={true}
                                behindGlowColor="rgba(255, 0, 0, 0.6)"
                                customInnerGradient="linear-gradient(145deg, rgba(40, 0, 0, 0.98) 0%, rgba(10, 0, 0, 0.95) 100%)"
                            />
                        ))}
                    </div>
                </div>

                {/* Registration Team Section */}
                <div className="mb-24 space-y-4">
                    <h2 className="text-[32px] font-bold text-matrix-red uppercase tracking-tighter font-poster drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">
                        Registration Team
                    </h2>
                    <div className="w-20 h-1 bg-matrix-red mx-auto shadow-[0_0_15px_rgba(255,0,0,0.6)]"></div>

                    <div className="flex flex-wrap justify-center gap-8 pt-12">
                        {[
                            { name: "Purusoth", phone: "7397520061" },
                            { name: "Swathika", phone: "8870700760" },
                            { name: "Dharmika", phone: "9486289264" },
                            { name: "Nivetha", phone: "9177583915" },
                            { name: "Melosa", phone: "8830324704" }
                        ].map((member, i) => (
                            <div key={i} className="px-8 py-4 rounded-none border-2 border-matrix-red/30 bg-black/60 hover:bg-matrix-red hover:border-matrix-red transition-all duration-500 group shadow-[0_0_15px_rgba(255,0,0,0.1)] flex flex-col items-center gap-1">
                                <span className="text-matrix-red font-matrix font-black tracking-[0.3em] uppercase group-hover:text-black transition-colors">{member.name}</span>
                                <span className="text-zinc-500 text-xs font-mono group-hover:text-black/70 transition-colors tracking-widest">{member.phone}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};


export default TeamSection;
