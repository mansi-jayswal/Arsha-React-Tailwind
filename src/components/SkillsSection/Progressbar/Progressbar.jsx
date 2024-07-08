import React from 'react';

const ProgressBar = ({ skill, percentage }) => {
  const dashArray = `${percentage * 0.99}px, 100px`;

  return (
    <div className="mb-7">
      <div className="flex justify-between py-1">
        <span className="text-sm text-default-color font-semibold uppercase">{skill}</span>
        <span className="text-sm font-semibold text-default-color pr-5">{percentage}%</span>
      </div>
      <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
        <path
          className="rc-progress-line-trail"
          d="M 0.5,0.5 L 99.5,0.5"
          strokeLinecap="round"
          stroke="gray"
          strokeWidth="5"
          fillOpacity="0"
        ></path>
        <path
          className="rc-progress-line-path"
          d="M 0.5,0.5 L 99.5,0.5"
          strokeLinecap="round"
          stroke="rgba(40, 58, 90, 0.9)"
          strokeWidth="5"
          fillOpacity="0"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: '0px',
            transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s',
          }}
        ></path>
      </svg>
    </div>
  );
};

export default ProgressBar;
