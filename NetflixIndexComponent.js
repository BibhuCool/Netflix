
import NetflixHeaderComponent from './NetflixHeadeComponent'
import './NetflixIndex.css'
import NetflixMainComponent from './NetflixMainComponent'

export default function NetflixIndexComponent() {
    return (
        <>

            <div className="backimage" style={{ width: '100%', height: '700px' }}>
                
                <div className='backcolor'>
                <div>
                    <NetflixHeaderComponent />
                </div>
                    <NetflixMainComponent />

                </div>

            </div>
        </>
    )
}