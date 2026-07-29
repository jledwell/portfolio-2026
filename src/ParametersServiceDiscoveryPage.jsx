import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles/ContentPage.css'
import {
  parametersServiceDiscoveryContentData,
  parametersServiceDiscoveryContentTags,
  parametersServiceDiscoverySummaryColumns,
} from './parametersServiceDiscoveryContentData'

function ParametersServiceDiscoveryPage() {
  useEffect(() => {
    document.title = 'Discovery to Outcomes: Parameters Service'
  }, [])

  return (
    <div className="content-page content-page--parameters-service-discovery">
      <Link to="/" className="content-back-link">
        ← Back to Portfolio
      </Link>
      <h1 className="content-page-title">Discovery to Outcomes: Parameters Service</h1>
      <div className="content-page-tags">
        {parametersServiceDiscoveryContentTags.map((tag) => (
          <span key={tag} className="content-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="content-summary-grid">
        {parametersServiceDiscoverySummaryColumns.map((column) => (
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
            <svg
              className="map-pin-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                fill="#888888"
              />
            </svg>
          </div>
          <svg
            className="winding-line"
            width="64"
            height="100%"
            viewBox="0 0 64 5000"
            preserveAspectRatio="none"
          >
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
          {parametersServiceDiscoveryContentData.map((section, index) => {
            const sectionClasses =
              section.heading === 'Discovery & Insights' ||
              section.heading === 'Actions' ||
              section.heading === 'Next Steps'
                ? 'content-section content-section--full'
                : 'content-section'

            return (
              <div key={index} className={sectionClasses}>
                <div className="content-text">
                  <h2>{section.heading}</h2>
                  <p>{section.paragraph}</p>
                  {section.bulletPoints?.length ? (
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
                {section.imagePath || section.imageLabel ? (
                  <div className="content-image">
                    {section.imagePath ? (
                      <div className="content-image-wrap">
                        <img
                          src={section.imagePath}
                          alt=""
                          className="content-graphic"
                        />
                        {section.imageOverlay ? (
                          <span className="content-image-overlay">
                            {section.imageOverlay}
                          </span>
                        ) : null}
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

export default ParametersServiceDiscoveryPage
