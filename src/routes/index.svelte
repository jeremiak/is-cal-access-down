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
	<h1>Is <a href="https://cal-access.sos.ca.gov/">Cal-Access</a> down right now?</h1>

	{#if isDown}
	<h2>Yes</h2>
	{:else}
	<h2>No</h2>
	{/if}

	<p>As far as we can tell the site is currently {#if isDown}not working{:else}working{/if}.</p>

	<details>
		<summary>Wait, why does <i>this</i> site exist?</summary>
		<p>Cal-Access is the California Secretary of State's online system for finding campaign finance and lobbying information. Sometimes it goes down.More often than anybody would like.</p>
	</details>
	
</section>

<style lang="scss">
	section {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 90vh;
		justify-content: center;
		text-align: center;
	}

	h1, h2 {
		margin-top: 0;
		margin-bottom: 0;
	}

	h2 {
		font-size: 10rem;
		margin-top: 2rem;
	}

	details {
		display: none;
		font-family: sans-serif;
		margin-top: 1rem;
	}

	summary {
		cursor: pointer;
	}

	details p {
		margin-top: .5rem;
		text-align: left;
	}

</style>
