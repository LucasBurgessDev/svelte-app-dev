<script>
    import { onMount } from "svelte";
    import Development from "./development.svelte";
    // define the data holding variable
    let developments;
    onMount(async () => {
        await fetch(`http://localhost:8081/`)
            .then((r) => r.json())
            .then((data) => {
                developments = data;
            });
    });
</script>

<style>
    .loading {
        opacity: 0;
        animation: 0.4s 0.8s forwards fade-in;
    }
    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    li {
        list-style-type: georgian;
    }
</style>

{#if developments}
    {#each developments as development}
        <ul>
            <li>
                <Development {development} />
            </li>
        </ul>
    {/each}
{:else}
    <p class="loading">loading...</p>
{/if}
