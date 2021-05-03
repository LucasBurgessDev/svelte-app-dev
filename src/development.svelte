<script>
    // create a prop
    export let development;
</script>

<style>
    article {
        margin: 0 0 1em 0;
    }
    h1 {
        font-size: 1.4em;
        margin: 0;
        display: block;
    }
</style>

<article>
    <h1>{development.name}</h1>
    <small> Location: <b>{development.location}</b> </small><br />
    <small>
        Number of apartments:
        <b>{development.no_of_apartments}</b>
    </small><br />
    <small> Rating: <b>{development.rating}</b> </small>
</article>
