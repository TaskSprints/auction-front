import { useEffect, useState, useCallback } from "react";
import { Client, Message } from "@stomp/stompjs";

interface UseBidProps {
  url: string; // STOMP 브로커 URL
  topic: string; // 경매 입찰 주제
  onMessageReceived?: (message: string) => void; // 수신된 메시지 처리 함수
}

export const useBid = ({ url, topic, onMessageReceived }: UseBidProps) => {
  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    const stompClient = new Client({
      brokerURL: url,
      onConnect: () => {
        // 경매 입찰 주제를 구독
        stompClient.subscribe(topic, (message: Message) => {
          if (message.body && onMessageReceived) {
            try {
              // 수신된 입찰 메시지 처리
              onMessageReceived(JSON.parse(message.body));
            } catch (error) {
              console.error("입찰 메시지 본문 파싱 오류:", error);
            }
          }
        });
      },
      onStompError: (frame) => {
        // console.error("브로커 오류:", frame.headers["message"]);
        // console.error("추가 세부정보:", frame.body);
      },
    });

    setClient(stompClient);
    stompClient.activate();

    return () => {
      stompClient.deactivate();
    };
  }, [url, topic, onMessageReceived]);

  const sendBid = useCallback(
    (destination: string, bidMessage: string) => {
      if (client?.connected) {
        // 경매 입찰 메시지 발송
        client.publish({ destination, body: JSON.stringify(bidMessage) });
      }
    },
    [client],
  );

  return { sendBid };
};
