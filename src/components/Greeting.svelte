<script lang="ts">
	export let greetings: Array<string>
	let greeting = greetings[(Math.floor(Math.random() * greetings.length))]
</script>

<p>{greeting}</p>