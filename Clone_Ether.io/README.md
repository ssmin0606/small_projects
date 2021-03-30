# retro

- 어떤 것을 모델로 설정할 지 어렵다.
  - 객체? 행위?
- 모델링 작업
  - flow를 먼저 그려보고
  - 모델링 하자~
- M:M에서의 관계는 중계 테이블을 가지고 해주자

Error: [WinError 10013] 액세스 권한에 의해 숨겨진 소켓에 액세스를 시도했습니다

- 다른 vscode에서 local server가 구동되고 있었음





# Ether.io 로직 카피

overview

- ether.io 사이트 주요 기능 클론



**ui/ux 구성**

- figma 사용
- 처음 사용해보았는데 사용하기 편한듯? 앞으로 자주 써야겠다
- 총 2페이지로 구성
  - page(index)
    - 질문 리스트 보여주기 

![image-20210330153504013](\retro.assets\image-20210330153504013.png)

- - page(main)
    - balance 게임 제목
    - 현재 투표 결과들을 보여주는 창(bootstrap5 - progress bar 이용)
    - 댓글 작성란
    - 댓글 보여주는 창들 (A, B)

![image-20210330155442392](\retro.assets\image-20210330155442392.png)





**model링**

- class Vote
- class Comment

![image-20210330160157503](D:\STUDY\SSAFY\ssafy5-study\Django\hw, ws (작업용)\0330\retro.assets\image-20210330160157503.png)

 



### 회고

- 모델링 부분이 많이 어려웠다. 어떤 것을 foreign_key로 받을지를 구분하는 것이 너무 어려웠고 따로 class를 또 만들어야 되는 지 구별하는 게 어려웠다.
  - 그래서 지금 작업을 한 것은 문제가 되지 않지만 아마 현직자분들이 보시기엔 매끄럽지 않은듯 합니다.
- `visual studio liveshare` 를 통해서 pair programming 진행
  - 같이 코드를 보면서 필요한 부분을 배분해서 코딩을 해서



