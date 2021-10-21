const { Octokit } = require("@octokit/rest");
require("dotenv").config();

const octokit = new Octokit({
  auth: process.env.ACCESS_TOKEN,
});

// 1. Authenticate user &  print current user data.
// async function getUser() {
//   const { data } = await octokit.request("/user");
//   console.log(data);
// }
// getUser();

//
// 2. Create Repo, Fork Repo , Create Issue on Repo, Delete Repo.
// octokit.repos
//   .createForAuthenticatedUser({
//     name: "testing123",
//   })
//   .then((response) => console.log("repo created"));

// octokit.repos
//   .createFork({
//     owner: "ishikkkkaaaa",
//     repo: "DSA",
//   })

//   .then((response) => console.log(response));

// octokit.issues.create({
//   owner: "isarojdahal",
//   repo: "testing123",
//   title: "Fix bug in line 23",
// });

// octokit.repos
//   .delete({
//     owner: "isarojdahal",
//     repo: "DSA",
//   })
//   .then((response) => console.log("repo deleted"));

// 3. Create a Gist comment, update comment, Delete comment & Star a gist.

// octokit.gists.createComment({
//   gist_id: "8f24cb75cea065e26f53830bdaadf757",
//   body: "comment from Octokit.",
// });

// octokit.gists.updateComment({
//   gist_id: "8f24cb75cea065e26f53830bdaadf757",
//   comment_id: "3935037",
//   body: "new comment",
// });

// octokit.gists.deleteComment({
//   gist_id: "8f24cb75cea065e26f53830bdaadf757",
//   comment_id: "3935037",
// });

// octokit.gists.star({
//   gist_id: "8f24cb75cea065e26f53830bdaadf757",
// });

// 4. List all gists of current logined user.

octokit.gists
  .listForUser({
    username: "isarojdahal",
  })
  .then((response) => console.log(response));
