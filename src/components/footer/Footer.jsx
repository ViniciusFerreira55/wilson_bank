import InstaIcon from '../../assets/insta.png'
import FaceIcon from '../../assets/face.png'
import LinkeIcon from '../../assets/linkedin.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'


export const Footer = () => {
    return(
        <div className="place-content-evenly bg-purple-500 content-center rounded-t-lg flex justify-center items-center">
            <div className='text-2xl'><h1>Acompanhe:</h1></div>
            <ul> 
                <li className="inline-block p-8"><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={InstaIcon} alt="insta" className='w-16 h-16'/></a></li>
                <li className="inline-block p-8"><a href="https://pt-br.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={FaceIcon} alt="face" className='w-16 h-16'/></a></li>
                <li className="inline-block p-8"><a href="https://br.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={LinkeIcon} alt="likedin" className='w-16 h-16'/></a></li>
                <li className="inline-block p-8"><a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D" target="_blank" rel="noopener noreferrer"><img src={TwitterIcon} alt="twitter" className='w-16 h-16'/></a></li>
                <li className="inline-block p-8"><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src={YoutubeIcon} alt="yotube" className='w-16 h-16'/></a></li>
            </ul>
        </div>
    )
}