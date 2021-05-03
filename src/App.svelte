<script>
	let name = "Caspar House";
	let location = "Jewellery Quarter, Birmingham";
	let canSubscribe;
	let subscribed;
	let unsub;
	let developments;
	let development;
	let starratingstyle = {
		styleStarWidth: 85,
		styleEmptyStarColor: "#737373",
		styleFullStarColor: "#ffd219",
	};

	import { writable } from "svelte/store";
	import StarRating from "./star-rating.svelte";
	import { onMount } from "svelte";
	import Development from "./development.svelte";
	import Developments from "./developments.svelte";

	const store = writable(0, () => {
		subscribed = true;
		console.log("got a subscriber");
		return () => console.log("no more subscribers");
	});

	function subscribe() {
		unsub = store.subscribe(() => (subscribed = true));
	}

	function unsubscribe() {
		unsub();
		subscribed = false;
	}

	function toggleSubscriptions() {
		canSubscribe = !canSubscribe;
	}

	//$: canSubscribe && $store
</script>

<h1>{name}, {location}.</h1>

<h2>Store subscription!</h2>

<button on:click={toggleSubscriptions}>Toggle subscriptions</button><br /><br />

{#if subscribed}
	One subscriber!
	<button disabled={!canSubscribe} on:click={unsubscribe}>Click to UNsubscribe</button>
{:else}
	<button disabled={!canSubscribe} on:click={subscribe}>Click to subscribe</button>
{/if}

<br /><br />

<star-rating-heading>
	<h1>Star rating</h1>
	<StarRating rating={Developments.rating} {starratingstyle} />
</star-rating-heading>

<br /><br />

<main>
	<Developments {developments} />
</main>

<body>{name} is located in the {location}.</body>
