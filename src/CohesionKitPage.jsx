import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles/ContentPage.css'
import ImageCaption from './ImageCaption'
import {
  cohesionKitContentData,
  cohesionKitContentTags,
  cohesionKitSummaryColumns,
} from './cohesionKitContentData'

const IMG = `${import.meta.env.BASE_URL}images`

function CohesionKitPage() {
  useEffect(() => {
    document.title = 'Cohesion Kit'
  }, [])

  const situationImages = [
    {
      imagePath: `${IMG}/02%20cohesion%20kit/high-level-workflow-diagram.png`,
      imageCaption: 'High-level workflow',
    },
    {
      imagePath: `${IMG}/02%20cohesion%20kit/Complexity%20by%20partner.png`,
      imageCaption: 'Data complexity by product',
    },
  ]

  const finalEngagementModel = {
    imagePath: `${IMG}/02%20cohesion%20kit/final-engagement-model.png`,
    imageCaption: 'Final',
  }

  const modularComponentImages = [
    {
      imagePath: `${IMG}/02%20cohesion%20kit/filter-and-search-anatomy.png`,
      imageCaption: 'Lorem Ipsum',
    },
    {
      imagePath: `${IMG}/02%20cohesion%20kit/filter-and-search-sizes.png`,
      imageCaption: 'Lorem Ipsum',
    },
  ]

  const modularComponentsRightImage = {
    imagePath: `${IMG}/02%20cohesion%20kit/create-dialog-sizes.png`,
    imageCaption: 'Lorem Ipsum',
  }

  const engagementSketches = [
    {
      imagePath: `${IMG}/02%20cohesion%20kit/engagement-model-sketch-2.jpg`,
      imageCaption: null,
    },
    {
      imagePath: `${IMG}/02%20cohesion%20kit/engagement-model-sketch-1.jpg`,
      imageCaption: 'Sketches',
    },
  ]

  return (
    <div className="content-page content-page--cohesion-kit">
      <Link to="/" className="content-back-link">
        ← Back to Portfolio
      </Link>
      <h1 className="content-page-title">
        Cohesion Kit
      </h1>
      <div className="content-page-tags">
        {cohesionKitContentTags.map((tag) => (
          <span key={tag} className="content-tag">{tag}</span>
        ))}
      </div>

      <div className="content-summary-grid">
        {cohesionKitSummaryColumns.map((column) => (
          <div key={column.heading} className="content-summary-col">
            <h3 className="content-summary-heading">{column.heading}</h3>
            {column.bulletPoints?.length ? (
              <ul className="content-summary-list">
                {column.bulletPoints.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="content-summary-text">{column.text}</p>
            )}
          </div>
        ))}
      </div>

      <div className="content-column">
          {cohesionKitContentData.map((section, index) => (
            <div key={index} className="content-section content-section--full">
              <div className="content-text">
                <h2>{section.heading}</h2>
                <p>{section.paragraph}</p>
              </div>

              {section.heading === 'Situation' ? (
                <div className="content-image ck-challenges-image">
                  <div className="content-image-stack">
                    {situationImages.map((img, imgIndex) => (
                      <figure key={imgIndex} className="content-image-wrap">
                        <img src={img.imagePath} alt="" className="content-graphic" />
                        <ImageCaption caption={img.imageCaption} />
                      </figure>
                    ))}
                  </div>
                </div>
              ) : null}

              {section.heading === 'Modular Components' ? (
                <div className="content-image">
                  <div className="ck-modular-layout">
                    <div className="ck-modular-left">
                      {modularComponentImages.map((img, imgIndex) => (
                        <figure key={imgIndex} className="content-image-wrap">
                          <img src={img.imagePath} alt="" className="content-graphic" />
                          <ImageCaption caption={img.imageCaption} />
                        </figure>
                      ))}
                    </div>

                    <figure className="content-image-wrap ck-modular-right">
                      <img src={modularComponentsRightImage.imagePath} alt="" className="content-graphic" />
                      <ImageCaption caption={modularComponentsRightImage.imageCaption} />
                    </figure>
                  </div>
                </div>
              ) : null}

              {section.heading === 'Partner engagement model' ? (
                <div className="content-image">
                  <div className="ck-engagement-layout">
                    <div className="ck-engagement-sketches">
                      {engagementSketches.map((img, imgIndex) => (
                        <figure key={imgIndex} className="content-image-wrap ck-engagement-sketch">
                          <img src={img.imagePath} alt="" className="content-graphic ck-engagement-sketch-img" />
                          <ImageCaption caption={img.imageCaption} />
                        </figure>
                      ))}
                    </div>

                    <figure className="content-image-wrap ck-engagement-final">
                      <img src={finalEngagementModel.imagePath} alt="" className="content-graphic ck-engagement-final-img" />
                      <ImageCaption caption={finalEngagementModel.imageCaption} />
                    </figure>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
      </div>
    </div>
  )
}

export default CohesionKitPage
