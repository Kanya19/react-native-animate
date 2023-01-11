package com.tuwangnet.twwapp;

import android.os.Bundle;
import android.content.res.Configuration;
import android.content.res.Resources;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
   SplashScreen.show(this);
   super.onCreate(savedInstanceState);
  }
  @Override
  protected String getMainComponentName() {
    return "twwapp";
  }
  // 禁止字体缩放
  @Override
  public Resources getResources() {
    Resources res = super.getResources();
    Configuration config=new Configuration();
    config.setToDefaults();
    res.updateConfiguration(config,res.getDisplayMetrics());
    return res;
  }
}
