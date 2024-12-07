function getJobs() {
  return fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function showJobs(jobs) {
  let jobsContainer = document.querySelector(".jobs-container");
  let jobsHTML = " ";
  jobs.forEach((job) => {
    jobsHTML += `
        <div class="job-tile">
        <div class="top">
            <img src=${job.logo} alt="">
            <span>
                <i class="fas fa-ellipsis-h"></i>
            </span>
        </div>
        <div class="rolename">
            <span>${job.roleName}</span>
        </div>
        <div class="description">
            <span>${job.requirements.content}</span>
        </div>
        <div class="buttons">
        <div class="button apply-now">
        <a href=${job.applicationLink} target="_blank">Apply Now
        <i class="fas fa-chevron-right"></i></a>
            </div>
            <div class="button">
                Message
            </div>
        </div>
    </div>`;
  });
  jobsContainer.innerHTML = jobsHTML;
}

getJobs().then((data) => {
  showJobs(data);
});

function filtereJobs(jobs, searchText) {
  if (searchText) {
    let filteredJobs = jobs.filter((job) => {
      if (
        job.roleName.toLowerCase().includes(searchText) ||
        job.type.toLowerCase().includes(searchText) ||
        job.company.toLowerCase().includes(searchText) ||
        job.requirements.content.toLowerCase().includes(searchText)
      ) {
        return true;
      } else {
        return false;
      }
    });
    return filteredJobs;
  } else {
    return jobs;
  }
}

document.querySelector(".button-container").addEventListener("click", () => {
  let text = document.getElementById("filter-jobs").value;
  getJobs().then((jobs) => {
    let filteredJobs = filtereJobs(jobs, text);
    showJobs(filteredJobs);
  });
});
