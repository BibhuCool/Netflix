
export default function NetflixHeaderComponent() {
    return (
        <>
            <div>
                <div className="d-flex justify-content-between p-3">
                    <div style={{ fontSize: '25px', color: 'red',fontStyle:'italic' }}>
                        NETFLIX
                    </div>
                    <div>
                    <div className="input-group">
                        <select className="input-group-text rounded">
                            <option>English</option>
                            <option>हिंदी</option>
                        </select>
                        <button className="btn btn-danger ms-3 rounded">Sign In</button>
                    </div>
                    </div>

                </div>
            </div>
        </>
    )
}