# CSP-Hash-Generator
Javascript to quickly generate CSP hashes for all script/style elements in a website.

1. Copy the source code of [main.js](main.js)
2. Open the website you want to generate the SHA-256 integrity hashes for.
3. Open the browser's developer console.
4. Paste the code into the developer console.
5. Press enter.

The results will be logged to the browser's console via console.log in messages like:
```
Script Hash for: <script id="client-env" type="application/json"> 
Code snippet:
	{"locale":"en","featureFlags":["code_vulnerability_scanning","copilot_chat_remove_file_diff_intent","copilot_conversational_ux_history_refs","copilot_smell_icebreaker_ux","copilot_implicit_context","copilot_stop_response","failbot_handle_non_errors","geojson_azure_maps","image_metric_tracking","marketing_forms_api_integration_contact_request","marketing_pages_search_explore_provider","repository_suggester_elastic_search","turbo_experiment_risky","sample_network_conn_type","no_character_key_shortcuts_in_inputs","react_start_transition_for_navigations","custom_inp","remove_child_patch"]}

The SHA-256 for this script is: sha256-fBaGDsM+IHDkyDJML/Hxd6+ykjMCcZFY1Irc97Qt/hA=
```
```
Style Hash for: <style>
Code snippet:

			:where([data-hydro-view*="pull-request-hovercard-hover"] ~ .d-flex.mt-2):not(.rgh-seen--8093118031) {
				animation: 1ms rgh-selector-observer;

The SHA-256 for this style is: sha256-iYiB5NAARSnEd19sfwObvGTjyh4xG4zFPcenZcpB40I=
```