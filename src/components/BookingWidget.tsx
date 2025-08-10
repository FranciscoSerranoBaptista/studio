'use client'

import { useEffect, useState } from 'react'
import { FadeIn } from '@/components/FadeIn'

export function BookingWidget() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Only run on client side after mounting
    const initializeWidget = () => {
      // Check if script is already loaded
      if (document.getElementById('onedoc-widget-script')) {
        return
      }

      // Create script element
      const script = document.createElement('script')
      script.id = 'onedoc-widget-script'
      script.text = `
        var widgetConfigs=widgetConfigs||{};
        widgetConfigs["e2a0c042f1af36fa53d5f0eee4b1d782eaeb82c03db13995125c532aeb5ae4ea"]={};
        widgetConfigs["e2a0c042f1af36fa53d5f0eee4b1d782eaeb82c03db13995125c532aeb5ae4ea"].measurementIds=[];
        widgetConfigs["e2a0c042f1af36fa53d5f0eee4b1d782eaeb82c03db13995125c532aeb5ae4ea"].hasGoogleTagTracking=false;
        widgetConfigs["e2a0c042f1af36fa53d5f0eee4b1d782eaeb82c03db13995125c532aeb5ae4ea"].hasFusedeck=false;
        
        window.addEventListener("message", function(e) {
          var t=e.data["od-widget-id"],i=e.data["od-widget-height"],d=e.data["od-widget-ios"];
          if(t&&t in widgetConfigs&&"e2a0c042f1af36fa53d5f0eee4b1d782eaeb82c03db13995125c532aeb5ae4ea"===t){
            var a=document.getElementById("od-widget-"+t);
            if(a) {
              i&&(a.style.height=i+"px");
              true===d&&(a.style.width="100px",a.style["min-width"]="100%",a.scrolling="no");
              var g=e.data["od-tracking-configs"];
              void 0!==g&&(widgetConfigs[t].measurementIds=g);
              var o=e.data["od-has-google-tag-manager"];
              void 0!==o&&(widgetConfigs[t].hasGoogleTagTracking=o);
              var f=e.data["od-has-fusedeck"];
              void 0!==f&&(widgetConfigs[t].hasFusedeck=f);
              var n=e.data.GA4;
              if(widgetConfigs[t].hasGoogleTagTracking&&window.dataLayer&&n){
                var s=Object.keys(n.properties),r={event:n.name};
                s.forEach(function(e){r[e]=n.properties[e]});
                dataLayer.push(r);
              }
              if(widgetConfigs[t].hasFusedeck&&window.fdData&&n){
                var s=Object.keys(n.properties),r={event:n.name};
                s.forEach(function(e){r[e]=n.properties[e]});
                fdData.push(r);
              }
              if(n&&typeof window.gtag !== 'undefined') {
                for(var w=0;w<widgetConfigs[t].measurementIds.length;w++){
                  var f=widgetConfigs[t].measurementIds[w],c=(s=Object.keys(n.properties),{send_to:f});
                  s.forEach(function(e){c[e]=n.properties[e]});
                  gtag("event",n.name,c);
                }
              }
            }
          }
        });
      `
      
      document.head.appendChild(script)
      
      // Load the iframe
      setTimeout(() => {
        const iframe = document.getElementById("od-widget-e2a0c042f1af36fa53d5f0eee4b1d782eaeb82c03db13995125c532aeb5ae4ea") as HTMLIFrameElement
        if(iframe && iframe.dataset.src) {
          iframe.src = iframe.dataset.src
        }
      }, 500)
    }

    initializeWidget()
  }, [])

  // Don't render on server side to avoid hydration mismatch
  if (!mounted) {
    return (
      <FadeIn>
        <div className="rounded-3xl bg-white/50 p-8 shadow-sm ring-1 ring-neutral-950/5">
          <div className="flex items-center justify-center h-96 text-neutral-500">
            <div className="text-center">
              <div className="animate-pulse">Loading booking calendar...</div>
            </div>
          </div>
        </div>
      </FadeIn>
    )
  }

  return (
    <FadeIn>
      <div className="rounded-3xl bg-white/50 p-8 shadow-sm ring-1 ring-neutral-950/5">
        <iframe 
          className="od-widget" 
          id="od-widget-e2a0c042f1af36fa53d5f0eee4b1d782eaeb82c03db13995125c532aeb5ae4ea" 
          src="about:blank" 
          data-src="https://onedoc.ch/en/widget/e2a0c042f1af36fa53d5f0eee4b1d782eaeb82c03db13995125c532aeb5ae4ea" 
          style={{
            width: '100%',
            maxWidth: '1024px',
            height: '600px',
            border: 'none',
            borderRadius: '12px'
          }}
          title="Executive Transition Assessment"
        />
      </div>
    </FadeIn>
  )
}