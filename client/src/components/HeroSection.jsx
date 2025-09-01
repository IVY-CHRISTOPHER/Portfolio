


function HeroSection() {

    function handleHiring() {
        alert("Your Hired!!")
    }

    return (
        <div className="hero-wrapper">
            <div className="hero-name">
                <h1>Christopher Ivy</h1>
            </div>
            <div className="hero-tagline">
                <h2>Full-Stack Software Freelancer</h2>
            </div>
            <div className="hero-cta">
                <button onClick={handleHiring}>Hire Me</button>
            </div>
        </div>
    )
}

export default HeroSection