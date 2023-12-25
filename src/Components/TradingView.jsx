import { useEffect, useRef, memo } from 'react';

const TradingViewWidget = () => {
    const container = useRef();

    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
      {
        "width": "100%",
        "height": "100%",
        "symbol": "BINANCE:ETHUSDT",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "in",
        "enable_publishing": false,
        "withdateranges": true,
        "allow_symbol_change": true,
        "show_popup_button": true,
        "popup_width": "100%",
        "popup_height": "100%",
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;

        script.onerror = () => {
            console.error("Error loading TradingView script");
            // Handle the error as needed
        };

        container.current.appendChild(script);

        return () => {
            // Clean up the script when the component is unmounted
            container.current.removeChild(script);
        };
    }, []); // Empty dependency array for componentDidMount-like behavior

    return (
        <div className="tradingview-widget-container" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright"></div>
        </div>
    );
}

export default memo(TradingViewWidget);
