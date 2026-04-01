import './styles/ContentPage.css'
import { contentData, contentTags, summaryColumns } from './contentData'

function ContentPage() {
  return (
    <div className="content-page">
      <h1 className="content-page-title">Data Platform Product Integration</h1>
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
      <div className="content-with-line">
        <div className="line-column">
          <div className="map-pin-container">
            <svg className="map-pin-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#888888"/>
            </svg>
          </div>
          <svg className="winding-line" width="64" height="100%" viewBox="0 0 64 5000" preserveAspectRatio="none">
            <path
              d="M 32 0 
                 Q 40 120, 32 320
                 Q 24 440, 32 640
                 Q 40 840, 32 1040
                 Q 24 1240, 32 1440
                 Q 40 1640, 32 1840
                 Q 24 2040, 32 2240
                 Q 40 2440, 32 2640
                 Q 24 2840, 32 3040"
              fill="none"
              stroke="#d0d0d0"
              strokeWidth="12"
              strokeDasharray="25 20"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx="32" cy="3040" r="6" fill="#d0d0d0" />
          </svg>
        </div>
        <div className="content-column">
          {contentData.map((section, index) => {
            const sectionClasses =
              section.heading === 'Situation'
                ? 'content-section content-section--full'
                : 'content-section'

            const hasActionPhases = section.heading === 'Action' && section.actionPhases?.length

            return (
            <div key={index} className={sectionClasses}>
              <div className="content-text">
                <h2>{section.heading}</h2>
                <p>{section.paragraph}</p>
                {section.heading !== 'Action' && (
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
                )}
              </div>
              {hasActionPhases ? (
                <div className="action-phases-full">
                  <div className="action-phases-grid">
                    {section.actionPhases.map((phase, phaseIndex) => (
                      <div key={phaseIndex} className="action-phase-card">
                        <h3 className="action-phase-title">{phase.title}</h3>
                        {phase.imagePath ? (
                          <div className="action-phase-image-wrap">
                            <img
                              src={phase.imagePath}
                              alt=""
                              className="action-phase-image"
                            />
                            {phase.imageOverlay && (
                              <span className="content-image-overlay">{phase.imageOverlay}</span>
                            )}
                          </div>
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
                <div className="content-image">
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
                              <div key={`${img.rowId}-${imgIndex}`} className="content-image-row">
                                {rowImages.map((rowImg, rowImgIndex) => (
                                  <div key={rowImgIndex} className="content-image-wrap content-image-wrap--row">
                                    <img
                                      src={rowImg.imagePath}
                                      alt=""
                                      className="content-graphic content-graphic--row"
                                    />
                                    {rowImg.imageOverlay && (
                                      <span className="content-image-overlay">{rowImg.imageOverlay}</span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )
                          } else {
                            imageItems.push(
                              <div key={imgIndex} className="content-image-wrap">
                                <img
                                  src={img.imagePath}
                                  alt=""
                                  className="content-graphic"
                                />
                                {img.imageOverlay && (
                                  <span className="content-image-overlay">{img.imageOverlay}</span>
                                )}
                              </div>
                            )
                          }
                        }
                        return imageItems
                      })()}
                    </div>
                  ) : section.imagePath ? (
                    <div className="content-image-wrap">
                      <img
                        src={section.imagePath}
                        alt=""
                        className="content-graphic"
                      />
                      {section.imageOverlay && (
                        <span className="content-image-overlay">{section.imageOverlay}</span>
                      )}
                    </div>
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
    </div>
  )
}

export default ContentPage
