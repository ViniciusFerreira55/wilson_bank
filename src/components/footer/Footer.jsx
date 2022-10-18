import InstaIcon from '../../assets/insta.png'
import FaceIcon from '../../assets/face.png'
import LinkeIcon from '../../assets/linkedin.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'


export const Footer = () => {
    return(
        <div className="place-content-evenly bg-purple-500 content-center rounded-t-lg flex justify-center mt-12 items-center">
            <div className='text-2xl'><h1>Acompanhe:</h1></div>
            <ul> 
                <li className="inline-block p-8"><a href="a"><img src={InstaIcon} alt="insta" className='w-16 h-16'/></a></li>
                <li className="inline-block p-8"><a href="a"><img src={FaceIcon} alt="face" className='w-16 h-16'/></a></li>
                <li className="inline-block p-8"><a href="a"><img src={LinkeIcon} alt="likedin" className='w-16 h-16'/></a></li>
                <li className="inline-block p-8"><a href="a"><img src={TwitterIcon} alt="twitter" className='w-16 h-16'/></a></li>
                <li className="inline-block p-8"><a href="a"><img src={YoutubeIcon} alt="yotube" className='w-16 h-16'/></a></li>
            </ul>
        </div>
    )
}