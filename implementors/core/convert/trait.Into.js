(function() {var implementors = {};
implementors["aquamarine"] = [{"text":"impl Into&lt;(Particle, Sender&lt;Result&lt;StepperEffects, AquamarineApiError&gt;&gt;)&gt; for AwaitedParticle","synthetic":false,"types":[]}];
implementors["fluence_client"] = [{"text":"impl Into&lt;Particle&gt; for ClientCommand","synthetic":false,"types":[]}];
implementors["particle_protocol"] = [{"text":"impl Into&lt;(ProtocolMessage, Option&lt;Sender&lt;bool&gt;&gt;)&gt; for HandlerMessage","synthetic":false,"types":[]},{"text":"impl&lt;OutProto:&nbsp;OutboundUpgradeSend, OutEvent&gt; Into&lt;OneShotHandler&lt;ProtocolConfig, OutProto, OutEvent&gt;&gt; for ProtocolConfig","synthetic":false,"types":[]}];
implementors["server_config"] = [{"text":"impl Into&lt;KademliaConfig&gt; for KademliaConfig","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()