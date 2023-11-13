import Image01 from '../../assets/image-01.png'
import Image02 from '../../assets/image-02.png'
import Image03 from '../../assets/image-03.png'
import './BlogPostSection.css';

const BlogPostSection = () => {
  return (
    <section className='blogPost--container'>
      <div className='blogPost--text__container'>
        <h2 className='post--heading'>Why Should you have a cat?</h2>
        <p className='post--description'>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
        <a href='https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm#:~:text=Owning%20a%20cat%20can%20bring,be%20an%20extremely%20rewarding%20relationship' className='readmore--container'>
          <p className='readmore--text'>Read more</p>
          <span className="material-symbols-outlined showMore--icon">trending_flat</span>
        </a>
      </div>
      <div className='blogPost--image__container'>
        <img src={Image01} alt="Cute Cat Sleeping" className='image-one'/>
        <img src={Image02} alt="Pretty Cat Paws" className='image-two' />
        <img src={Image03} alt="Cute cat in yellow bag" className='image-three' />
      </div>
    </section>
  )
}

export default BlogPostSection