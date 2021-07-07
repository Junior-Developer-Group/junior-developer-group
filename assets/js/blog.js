const blogArray = [
  {
    topic: 'Productivity',
    title: '7 Skills of Highly Effective Programmers',
    postDate: '1 month ago',
    preview:
      'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Here are our seven skills of effective programmers... ',
    readLink: '#',
  },
  {
    topic: 'Media',
    title: 'SMM starter pack, part 2: content promotion',
    postDate: '17 days ago',
    preview:
      'This is the second part of the SMM starter pack series of articles. If you made it this far, you must be willing to learn about promoting business through social media.',
    readLink: '#',
  },
  {
    topic: 'Business',
    title: '11 Things I Wish I Knew When I Started My Business',
    postDate: '1 month ago',
    preview:
      'Here are 11 things I wish I knew when I started my business. I hope they will save you some time and some anguish because (experience is a good teacher here) the sodium from your tears acts as a corrosive melting agent...',
    readLink: '#',
  },
]

for (blog of blogArray) {
  const blogCards = `
    <div class="card">
      <div class="left-column background1-left-column">
        <img
          src="../assets/images/blog-images/computer.svg"
          alt="Coding Computer"
        />
      </div>

      <div class="right-column">
        <div class="card-header">
          <h4>${blog.topic}</h4>
          <h6>${blog.postDate}</h6>
        </div>
        <h2>${blog.title}</h2>
        <p>
          ${blog.preview}
        </p>
        <div class="card-footer">
          <h6><a href="${blog.readLink}">Read more</a></h6>
        </div>
      </div>
    </div>
  `

  document.querySelector('.blog-card-wrapper').innerHTML += blogCards
}
