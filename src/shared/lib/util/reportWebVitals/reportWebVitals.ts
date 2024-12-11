import { onCLS, onFCP, onLCP, onTTFB, Metric } from "web-vitals";

export const reportWebVitals = (onPerfEntry?: () => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // 각 성능 지표를 측정하고 결과를 콘솔에 출력하는 예
    const logMetric = (metric: Metric) => {
      // eslint-disable-next-line no-console
      console.log({
        name: metric.name, // 측정항목 이름 (CLS, FCP, LCP, TTFB)
        value: metric.value, // 측정된 값
        rating: metric.rating, // 성능 등급 (good, needs-improvement, poor)
        delta: metric.delta, // 이전 값과의 차이
        id: metric.id, // 고유 식별자
      });
    };

    onCLS(logMetric);
    onFCP(logMetric);
    onLCP(logMetric);
    onTTFB(logMetric);
  }
};
