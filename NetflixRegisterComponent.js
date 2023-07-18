
export default function NetflixRegisterComponent() {
    return (
        <>
            <div>
                <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                <div className="input-group input-group-lg">
                    <input type="email" className="form-control" placeholder="Email address" />
                    <button className="btn btn-danger">
                        Get Started
                        <span className="bi bi-chevron-right"></span>
                    </button>

                </div>
            </div>
        </>
    )
}