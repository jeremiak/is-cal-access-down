<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/status.json')
		const json = await response.json()
		return {
			status: 200,
			props: {
				isDown: json.calAccessIsDown,
			}
		}
	}
</script>

<script>
	export let isDown
</script>

<svelte:head>
	<title>Is Cal-Access Down?</title>
</svelte:head>

<section>
	<h1>Is Cal-Access down right now?</h1>

	{#if isDown}
	<h2>Yes</h2>
	{:else}
	<h2>No</h2>
	{/if}

	<p>Based on our best guess, <a href="https://cal-access.sos.ca.gov/">Cal-Access</a> is currently 	{#if isDown}not working{:else}working{/if}.</p>
	
</section>

<style lang="scss">
	section {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 90vh;
		justify-content: center;
	}

	h2 {
		font-size: 10rem;
	}

</style>
