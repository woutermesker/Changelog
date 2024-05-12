import { useEffect, useState } from "react";
import moment from "moment";

import "./styles.css";
import "./stylesAnimdation.css";

export default function Home() {
  const [changelog, setChangeLog] = useState([]);

  useEffect(() => {
    fetch("/api/changelog")
      .then((response) => response.json())
      .then((data) => setChangeLog(data));
  }, []);

  function customTimeFormat(time) {
    const now = moment();
    const then = moment(time);
    const months = now.diff(then, "months");
    then.add(months, "months"); // increase the 'then' by the calculated months
    const days = now.diff(then, "days");

    if (months > 0) {
      return `${months} months ${days} days ago`;
    } else {
      return moment(time).fromNow();
    }
  }

  const heroBannerItems = [
    {
      id: 1,
      title: "First Post",
    },
    {
      id: 2,
      title: "First Post",
    },
    {
      id: 1,
      title: "First Post",
    },
    {
      id: 1,
      title: "First Post",
    },
    {
      id: 1,
      title: "First Post",
    },
    {
      id: 1,
      title: "First Post",
    },
    {
      id: 1,
      title: "First Post",
    },
    {
      id: 1,
      title: "First Post",
    },
    {
      id: 1,
      title: "First Post",
    },
    {
      id: 1,
      title: "First Post",
    },
    {
      id: 1,
      title: "First Post",
    },
    {
      id: 1,
      title: "First Post",
    },
    // Add more posts as needed
  ];

  return (
    <main className="wrapper ">
      <div className="changelog-hero d-flex">
        <div className="container-xl">
          <div className="flex-wrap flex-md-items-center gutter-spacious">
            <div className="col-12 col-md-5">
              <h1 style={{ marginTop: "40px" }}>Changelog HEET</h1>
              <p style={{ lineHeight: "26px" }}>
                Stay up-to-date with the latest features, API updates, and other
                announcements for HEET.
              </p>
            </div>
            <div className="col-12 col-md-7">
              <div class="window">
                <div class="scene">
                  <ul class="grid2">
                    {heroBannerItems.map((item, index) => (
                      <li key={index}>
                        <div className="item">
                          <div className="item__icon">{item.icon}</div>
                          <div className="item__text">{item.title}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xl mx-auto p-responsive-blog js-ajax-landing">
        {changelog.map((log) => (
          <article
            id="changelog-78011"
            className="d-flex gutter-spacious flex-wrap position-relative changelog-line js-ajax-fetchable post-78011 changelog type-changelog status-publish hentry changelog-label-copilot"
          >
            <div className="pb-4 pt-5 pt-md-7 col-12 col-md-5 position-relative">
              <div className="changelog-single-details position-sticky top-12">
                <svg
                  className="octicon octicon-commit position-absolute left-0 color-bg-default color-fg-muted"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h2 className="h5-mktg">
                  <a href="">{log.title}</a>
                </h2>
                <time 
                  datetime="2024-05-09"
                  className="d-block f5-mktg text-medium color-fg-muted mt-14px"
                >
                  {customTimeFormat(log.time)} <span style={{color:"black", fontWeight:"bold"}}>by</span>  {log.author}
                </time>
                
                <ul className="d-inline-block list-style-none post-hero__categories mt-2">
                  {log.topics.map((topic, index) => (
                    <li key={index} className="d-inline-block mr-2 mt-2">
                      <a
                        href=""
                        className="f5-mktg pill-label text-gradient-purple-coral text-bold"
                      >
                        {topic}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="pb-5 pt-0 py-md-7 changelog-single-content-wrap border-bottom">
                <div
                  id="changelog-single-content-78011"
                  className="post__content changelog-single-content js-show-all-target"
                >
                  <p>{log.textBody}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
