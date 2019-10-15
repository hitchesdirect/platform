<template>
	<div class="grid">
		<form class="contact" @submit="submit($event)">
			<h1>Contact Us</h1>
			<div class="field">
				<label class="label">Name</label>
				<div class="control">
					<input v-model="name" class="input" type="text" placeholder="Enter name ..">
				</div>
			</div>

			<div class="field">
				<label class="label">Email</label>
				<div class="control has-icons-left has-icons-right">
					<input v-model="email" class="input" type="text" placeholder="Enter e-mail ..">
					<span class="icon is-small is-left">
						<i class="fas fa-envelope"></i>
					</span>
				</div>
			</div>

			<div class="field">
				<label class="label">Subject</label>
				<div class="control">
					<input v-model="subject" class="input" type="text" placeholder="Enter subject ..">
				</div>
			</div>

			<div class="field">
				<label class="label">Message</label>
				<div class="control">
					<textarea v-model="message" class="textarea" placeholder="Enter your message .."></textarea>
				</div>
			</div>

			<div class="field is-grouped">
				<div class="control">
					<span v-if="contactSent" class="has-text-success">Message successfully sent.</span>
					<span v-if="contactError" class="has-text-danger">Message failed to send: {{ contactError }}</span>
					<button class="button is-link">Submit</button>
				</div>
			</div>
		</form>
		<div>
			<div class="mapouter">
				<div class="gmap_canvas">
					<iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=JC%20Auto%20Sales&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
	computed: {
		...mapGetters(['contactSent', 'contactError']),
	},
})
export default class Contact extends Vue {
	private name = '';
	private email = '';
	private subject = '';
	private message = '';

	private submit($event: any) {
		$event.preventDefault();
		this.$store.dispatch('sendContact', {
			name: this.name,
			email: this.email,
			subject: this.subject,
			message: this.message,
		});
	}
}
</script>

<style scoped lang="scss">
@import 'src/assets/css/contact.scss';
</style>
