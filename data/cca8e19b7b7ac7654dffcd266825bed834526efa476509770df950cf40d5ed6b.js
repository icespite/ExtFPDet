
    if (navigator.joinAdInterestGroup) {
        const addIgScript = document.createElement('script');
        let src = null;
        if (navigator.runAdAuction) {
            if (window.FencedFrameConfig || 'src' in document.createElement('fencedframe')) {
                src = 'https://fledge-usa.creativecdn.com/fledge-igmembership?ntk=PN8u5of4Z9F2uWRczDdFrEVgqBySoSifvlJix-fEmoyFskp8qPHkeX-USu147KyC_SyMJQBvyky4MJYdhZCNFA';
            } else {
                src = 'https://fledge-usa.creativecdn.com/fledge-igmembership?ntk=PN8u5of4Z9F2uWRczDdFrEVgqBySoSifvlJix-fEmoyFskp8qPHkeX-USu147KyCBczJdUEphxQdkzWoHvgXTQ';
            }
        } else {
            if (window.FencedFrameConfig || 'src' in document.createElement('fencedframe')) {
                src = 'https://fledge-usa.creativecdn.com/fledge-igmembership?ntk=PN8u5of4Z9F2uWRczDdFrEVgqBySoSifvlJix-fEmoyFskp8qPHkeX-USu147KyC93U8sDN0EXtJUyIVmhlNjw';
            } else {
                src = 'https://fledge-usa.creativecdn.com/fledge-igmembership?ntk=PN8u5of4Z9F2uWRczDdFrEVgqBySoSifvlJix-fEmoyFskp8qPHkeX-USu147KyCErGmNYx94mJiwi5mbv25Ag';
            }
        }
        addIgScript.setAttribute('src', src);
        document.body.appendChild(addIgScript);
    }
