import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles/ContentPage.css'
import ImageCaption from './ImageCaption'
import { contentData, contentTags, summaryColumns } from './contentData'

function ContentPage() {
  useEffect(() => {
    document.title = 'Data Platform Integration'
  }, [])

  return (
    <div className="content-page content-page--data-platform">
      <Link to="/" className="content-back-link">
        ← Back to Portfolio
      </Link>
      <h1 className="content-page-title">
        Data Platform Integration
      </h1>
      <div className="content-page-tags">
        {contentTags.map((tag) => (
          <span key={tag} className="content-tag">{tag}</span>
        ))}
      </div>
      <div className="content-summary-grid">
        {summaryColumns.map((column) => (
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
          {contentData.map((section, index) => {
            const sectionClasses =
              section.heading === 'Discovery & Insights' ||
              section.heading === 'Actions' ||
              section.heading === 'Next Steps'
                ? 'content-section content-section--full'
                : 'content-section'

            const hasActionPhases = section.heading === 'Action' && section.actionPhases?.length

            return (
            <div key={index} className={sectionClasses}>
              <div className="content-text">
                <h2>{section.heading}</h2>
                <p>{section.paragraph}</p>
                {section.heading !== 'Action' && section.bulletPoints?.length ? (
                  <ul
                    className={
                      section.heading === 'Situation' || section.heading === 'Results'
                        ? 'content-list content-list--situation'
                        : 'content-list'
                    }
                  >
                    {section.bulletPoints.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              {hasActionPhases ? (
                <div className="action-phases-full">
                  <div className="action-phases-grid">
                    {section.actionPhases.map((phase, phaseIndex) => (
                      <div key={phaseIndex} className="action-phase-card">
                        <h3 className="action-phase-title">{phase.title}</h3>
                        {phase.imagePath ? (
                          <figure className="action-phase-media">
                            <div className="action-phase-image-wrap">
                              <img
                                src={phase.imagePath}
                                alt=""
                                className="action-phase-image"
                              />
                            </div>
                            <ImageCaption caption={phase.imageCaption} />
                          </figure>
                        ) : (
                          <div className="action-phase-placeholder">
                            {phase.title || 'Placeholder'}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (section.imagePath ||
                  section.images?.length ||
                  (section.imageLabel && section.heading !== 'Situation')) ? (
                <div
                  className={
                    section.heading === 'Actions'
                      ? 'content-image content-image--left'
                      : 'content-image'
                  }
                >
                  {section.images?.length ? (
                    <div className="content-image-stack">
                      {(() => {
                        const imageItems = []
                        for (let imgIndex = 0; imgIndex < section.images.length; imgIndex += 1) {
                          const img = section.images[imgIndex]

                          if (img.rowId) {
                            const rowImages = [img]
                            while (
                              imgIndex + 1 < section.images.length &&
                              section.images[imgIndex + 1].rowId === img.rowId
                            ) {
                              rowImages.push(section.images[imgIndex + 1])
                              imgIndex += 1
                            }

                            imageItems.push(
                              <div
                                key={`${img.rowId}-${imgIndex}`}
                                className={
                                  img.rowId === 'add-parameter-pair'
                                    ? 'content-image-row content-image-row--add-parameter'
                                    : 'content-image-row'
                                }
                              >
                                {rowImages.map((rowImg, rowImgIndex) => (
                                  <figure key={rowImgIndex} className="content-image-wrap content-image-wrap--row">
                                    <img
                                      src={rowImg.imagePath}
                                      alt=""
                                      className="content-graphic content-graphic--row"
                                    />
                                    <ImageCaption caption={rowImg.imageCaption} />
                                  </figure>
                                ))}
                              </div>
                            )
                          } else {
                            imageItems.push(
                              <figure key={imgIndex} className="content-image-wrap">
                                <img
                                  src={img.imagePath}
                                  alt=""
                                  className="content-graphic"
                                />
                                <ImageCaption caption={img.imageCaption} />
                              </figure>
                            )
                          }
                        }
                        return imageItems
                      })()}
                    </div>
                  ) : section.imagePath ? (
                    <figure className="content-image-wrap">
                      <img
                        src={section.imagePath}
                        alt=""
                        className="content-graphic"
                      />
                      <ImageCaption caption={section.imageCaption} />
                    </figure>
                  ) : (
                    <div className="placeholder-graphic">{section.imageLabel}</div>
                  )}
                </div>
              ) : null}
            </div>
            )
          })}
      </div>
    </div>
  )
}

export default ContentPage
