<script lang="ts">
    import type { IWebcam } from "../data/index";
    export let id: string;
    export let name: string;
    export let country: string;
    export let state: string;
    export let url: string;
    export let webcams: IWebcam[];
</script>

<style>
    h3 {
        margin: 5px;
    }

    .city-container {
        border-bottom: 3px #ccc solid;
        margin-bottom: 30px;
        margin-top: 30px;
    }

    .city-container h3 {
        text-align: center;
    }

    .webcam-image-container {
        max-height: 400px;
        height: auto;
        overflow-x: scroll;
        max-width: 100%;
        /* margin-bottom: 30px; */
    }

    .webcam-image {
        display: block;
        max-height: 400px;
        min-height: 400px;
        /* max-width: 80%; */
        min-width: 100%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 768px) {
        .city-container {
            max-width: 100%;
        }

        .webcam-image-container {
            max-height: 200px;
            max-width: 100%;
        }

        .webcam-image {
            max-height: 200px;
            min-height: 200px;
            margin: 0;
            padding: 0;
            /* max-width: 100%; */
        }
    }

    ::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
</style>

<div class="city-container" {id}>
    <h3><a href={url} target="_blank">{name}</a></h3>
    <div>{country} - {state}</div>
    <div class="webcam-image-container">
        <img src={webcams[0].url} class="webcam-image" alt={name} />
    </div>
</div>
