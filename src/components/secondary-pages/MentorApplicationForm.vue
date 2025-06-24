<template>
	<main>
		<header>
			<img
				src="../../assets/logo-with-background.png"
				alt="Junior Developer Group Logo | A butterfly with a blue and a purple wing" />
			<br />
			<h1>New Mentors</h1>
			<br />
			<p>
				Over the years, the group has supported over 200 early career developers and, as of right now, we're not
				able to accept any more new mentors (or members). <br />There are no plans to open the group for new
				members in the foreseeable future.
			</p>
			<br />
			<span> Please return to <a href="/"> homepage</a> or visit our <a href="/contact"> contact form </a></span>
		</header>
	</main>
</template>

<script>
export default {
	name: 'MentorApplicationForm',
}
</script>

<style lang="scss" scoped>
img {
	width: 280px;
	height: 280px;

	@media (max-width: 350px) {
		width: 150px;
		height: 150px;
		margin-top: 90px;
	}
}

header {
	text-align: center;
}
section {
	margin-top: 140px;
	margin-bottom: 40px;
	width: 90%;
}

main {
	min-height: 900px;
}

.mentor-application-form {
	background: lightblue;
	padding: 60px;
	color: var(--dark);
	max-width: 100%;
	display: flex;
	flex-direction: column;
}

h1,
p {
	margin: 0;
	padding: 0;
}

a {
	color: darkblue;
	text-decoration: underline !important;
}
</style>
