import React, {useRef} from "react";
import "./RepoItem.css";
import img_star from "../../../images/RepoItem/star.svg";
import img_warning from "../../../images/RepoItem/warning.svg";
import img_expand_more from "../../../images/RepoItem/expand_more.svg";
import img_expand_less from "../../../images/RepoItem/expand_less.svg";


function RepoItem({
  name,
  updated_at,
  language,
  description,
  open_issues,
  stargazers_count,
}) {

  const GitHubColors = require('github-colors');
  const language_color = GitHubColors.get(language) ? GitHubColors.get(language).color : "#ffffff";

  const expandRef = useRef();

  return (
    <div className="repo__card">
      <div className="repo__title--box">
        <p className="repo__title">{name}</p>
        <div className="repo__expand--icon">
          <label>
            <input class="toggle" type="checkbox" onClick={() => {
                  const dropdownDetails = expandRef.current;
                  if (dropdownDetails.style.display === 'none') {
                    dropdownDetails.style.display = 'block';
                  } else {
                    dropdownDetails.style.display = 'none';
                  }
                }}/>
            <span></span>
          </label>
        </div>
      </div>
      <p className="repo__last-update">Last updated {new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      }).format(new Date(updated_at))}</p>


      <div className="repo__language--container">
        {language &&
        <div className="repo__language--shadow">
          <div className="repo__language--color" style={{ 'background-color': language_color }}></div>
          <div className="repo__language">{language}</div>
        </div>
        }
      </div>


      <div ref={expandRef} className="repo__details" style={{ display: 'none' }}>

        <div className="repo__divider"></div>

        <p className="repo__details--description">{description}</p>

        <div className="repo__details--issues-and-stars">
          <div className="repo__details--open-issues">
            <img className="repo__open-isues--icon" src={img_warning} alt="warning-icon" />
            <div className="repo__open-isues--text">Open issues</div>
            <div className="repo__open-isues--count">{open_issues}</div>
          </div>
          <div className="repo__details--stars">
            <img className="repo__star--icon" src={img_star} alt="star-icon" />
            <div className="repo__stars--text">Stars</div>
            <div className="repo__stars--count">{stargazers_count}</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default RepoItem;
