import React, {FC} from 'react';

const ArchitectureIcon: FC<{size?: number; className?: string}> = ({className, size = 40}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#dp_architecture_clip0)">
        <path
          d="M34.1884 23.2686L34.1885 23.2685C34.3813 22.9011 34.5418 22.5176 34.668 22.1225C34.668 22.1224 34.668 22.1223 34.6681 22.1222L34.7157 22.1375C34.8194 21.8076 35.1252 21.5833 35.4709 21.5833L34.1884 23.2686ZM34.1884 23.2686C34.0182 23.5944 34.0791 23.9932 34.3391 24.2533L34.3391 24.2533L35.6836 25.5978L33.5148 27.7667L32.1711 26.4214L32.171 26.4214C31.911 26.1615 31.5122 26.1004 31.1863 26.2708L31.1862 26.2708C30.8188 26.4642 30.435 26.6246 30.0392 26.7504C29.6887 26.8607 29.4502 27.1857 29.4502 27.5533V29.45H26.3835L26.3843 27.554C26.3843 27.1864 26.1458 26.8615 25.7953 26.7511C25.3996 26.6254 25.0158 26.465 24.6483 26.2716L24.6482 26.2715C24.3223 26.1012 23.9235 26.1622 23.6635 26.4221L23.6634 26.4222L22.319 27.7667L20.1501 25.5978L21.4954 24.2533L21.4954 24.2533C21.7554 23.9932 21.8164 23.5944 21.6461 23.2685L21.646 23.2685C21.4532 22.9011 21.2927 22.5176 21.1665 22.1224C21.0561 21.7718 20.7312 21.5333 20.3636 21.5333H18.4669V18.4666H20.3628C20.7304 18.4666 21.0554 18.2281 21.1657 17.8775C21.292 17.4823 21.4524 17.0987 21.6453 16.7314L21.6453 16.7313C21.8156 16.4054 21.7546 16.0066 21.4947 15.7465L21.4947 15.7465L20.1502 14.402L22.3191 12.2331L23.6628 13.5784L23.6628 13.5784C23.9229 13.8384 24.3217 13.8994 24.6475 13.7291L24.6477 13.729C25.015 13.5356 25.3988 13.3752 25.7946 13.2495C26.1452 13.1392 26.3836 12.8142 26.3836 12.4466V10.55H29.4495V12.4459C29.4495 12.8135 29.6881 13.1385 30.0387 13.2488L30.0537 13.2012M34.1884 23.2686L37.367 21.5333V18.4667H35.4703C35.1027 18.4667 34.7777 18.2282 34.6674 17.8775M34.6674 17.8775L34.7151 17.8625M34.6674 17.8775C34.6674 17.8776 34.6674 17.8777 34.6675 17.8777L34.7151 17.8625M34.6674 17.8775C34.5412 17.4823 34.3807 17.0989 34.1879 16.7315L34.1878 16.7314C34.0175 16.4056 34.0786 16.0068 34.3385 15.7467L34.3385 15.7467L35.6838 14.4021L33.5149 12.2332L32.1704 13.5778L32.1704 13.5778C31.9103 13.8377 31.5115 13.8987 31.1856 13.7284L31.1855 13.7283C30.8181 13.535 30.4342 13.3745 30.0386 13.2488L30.0537 13.2012M34.7151 17.8625C34.8189 18.1924 35.1246 18.4167 35.4703 18.4167H37.367L34.2322 16.7083M34.7151 17.8625C34.588 17.4645 34.4264 17.0783 34.2322 16.7083M30.0537 13.2012C29.7239 13.0974 29.4995 12.7917 29.4995 12.4459V10.55L33.4795 12.1979L32.135 13.5424C31.8904 13.7869 31.5153 13.8443 31.2088 13.6841C30.8387 13.4893 30.4522 13.3278 30.0537 13.2012ZM34.3738 15.782L35.7192 14.4375L34.3738 15.782ZM34.3738 15.782C34.1294 16.0267 34.0719 16.4018 34.2322 16.7083M34.3738 15.782L34.2322 16.7083M37.4688 13.807L37.4334 13.8423L37.4688 13.807L34.1097 10.4479L34.0744 10.4833L34.1097 10.4479C33.7811 10.1193 33.2483 10.1193 32.9196 10.4479L32.9196 10.4479L31.4015 11.9667C31.312 11.9277 31.2229 11.8903 31.1334 11.8539V9.7082C31.1334 9.24336 30.7566 8.8665 30.2917 8.8665H25.5417C25.0769 8.8665 24.7 9.24336 24.7 9.7082V11.8539C24.6105 11.8903 24.5214 11.9277 24.432 11.9667L22.9139 10.4479L22.9139 10.4479C22.5852 10.1193 22.0525 10.1193 21.7238 10.4479L21.7237 10.4479L18.3647 13.807L18.3647 13.807C18.0361 14.1356 18.0361 14.6684 18.3647 14.9971L18.3647 14.9971L19.8834 16.5151C19.8439 16.6048 19.807 16.6939 19.7713 16.7833H17.6252C17.1604 16.7833 16.7835 17.1601 16.7835 17.625V22.375C16.7835 22.8398 17.1604 23.2167 17.6252 23.2167H19.7715C19.8072 23.3061 19.8441 23.3952 19.8836 23.4848L18.3649 25.0028L18.3649 25.0028C18.0363 25.3314 18.0363 25.8642 18.3649 26.1929L18.4003 26.1576L18.3649 26.1929L21.724 29.552L21.7593 29.5167L21.724 29.552C22.0526 29.8806 22.5854 29.8806 22.9141 29.552L22.9141 29.552L24.4322 28.0332C24.5217 28.0722 24.6108 28.1096 24.7003 28.146V30.2917C24.7003 30.7566 25.0771 31.1334 25.542 31.1334H30.292C30.7568 31.1334 31.1336 30.7566 31.1336 30.2917V28.146C31.2232 28.1097 31.3122 28.0722 31.4017 28.0332L32.9198 29.552L32.9198 29.552C33.2484 29.8806 33.7812 29.8806 34.1099 29.552L34.0746 29.5167L34.1099 29.552L37.469 26.1929L37.4337 26.1576L37.469 26.1929C37.7976 25.8643 37.7976 25.3315 37.469 25.0028L37.469 25.0028L35.9503 23.4848C35.9898 23.3952 36.0267 23.306 36.0624 23.2167H38.2087C38.6736 23.2167 39.0504 22.8398 39.0504 22.375V17.625C39.0502 17.1601 38.6733 16.7833 38.2085 16.7833H36.0622C36.0265 16.6938 35.9895 16.6047 35.9501 16.5151L37.4688 14.9971L37.4688 14.9971C37.7974 14.6685 37.7974 14.1357 37.4688 13.807ZM37.417 18.4667V21.5333V18.4667Z"
          fill="#EEF2F6"
          stroke="#EEF2F6"
          strokeWidth="0.1"
        />
        <path
          d="M27.9168 24.0084H27.9169C30.1294 24.0057 31.9225 22.2128 31.9251 20.0001V20.0001C31.9251 17.7863 30.1305 15.9917 27.9168 15.9917C25.7031 15.9917 23.9085 17.7863 23.9085 20.0001C23.9085 22.2138 25.7031 24.0084 27.9168 24.0084ZM27.9168 22.325C26.6328 22.325 25.5918 21.2841 25.5918 20.0001C25.5918 18.716 26.6328 17.6751 27.9168 17.6751C29.2009 17.6751 30.2418 18.716 30.2418 20.0001C30.2418 21.2841 29.2009 22.325 27.9168 22.325Z"
          fill="#EEF2F6"
          stroke="#EEF2F6"
          strokeWidth="0.1"
        />
        <path
          d="M29.5 7.38331H29.55V7.33331V4.95831V4.95825C29.5474 2.74568 27.7543 0.95263 25.5417 0.95H25.5417L8.125 0.95L8.12498 0.95C7.90176 0.950079 7.68777 1.03877 7.52996 1.19658L1.19658 7.52996C1.03878 7.68776 0.95 7.90183 0.95 8.125L0.95 35.0417L0.95 35.0418C0.95263 37.2543 2.74568 39.0474 4.95825 39.05H4.95831H25.5416C27.7543 39.0474 29.5473 37.2543 29.5499 35.0418V35.0417V32.6667V32.6167H29.4999H27.9166H27.8666V32.6667V35.0417C27.8666 36.3257 26.8257 37.3667 25.5416 37.3667H4.95831C3.67425 37.3667 2.63331 36.3257 2.63331 35.0417V8.47346L8.47346 2.63331H25.5417C26.8257 2.63331 27.8667 3.67425 27.8667 4.95831V7.33331V7.38331H27.9167H29.5Z"
          fill="#EEF2F6"
          stroke="#EEF2F6"
          strokeWidth="0.1"
        />
        <path
          d="M7.3335 1.74175H7.2835V1.79175V6.54175C7.2835 6.95136 6.95141 7.28344 6.54181 7.28344H4.9585H4.9085V7.33344V8.91675V8.96675H4.9585H6.54181C7.88109 8.96675 8.96681 7.88103 8.96681 6.54175V1.79175V1.74175H8.91681H7.3335Z"
          fill="#EEF2F6"
          stroke="#EEF2F6"
          strokeWidth="0.1"
        />
        <path
          d="M15.3 19.2083V19.1583H15.25H8.125H8.075V19.2083V20.7916V20.8416H8.125H15.25H15.3V20.7916V19.2083Z"
          fill="#EEF2F6"
          stroke="#EEF2F6"
          strokeWidth="0.1"
        />
        <path
          d="M6.59181 19.2083V19.1583H6.54181H4.9585H4.9085V19.2083V20.7916V20.8416H4.9585H6.54181H6.59181V20.7916V19.2083Z"
          fill="#EEF2F6"
          stroke="#EEF2F6"
          strokeWidth="0.1"
        />
        <path
          d="M16.0918 24.75V24.7H16.0418H9.7085H9.6585V24.75V26.3333V26.3833H9.7085H16.0418H16.0918V26.3333V24.75Z"
          fill="#EEF2F6"
          stroke="#EEF2F6"
          strokeWidth="0.1"
        />
        <path
          d="M8.17481 24.75V24.7H8.12481H6.5415H6.4915V24.75V26.3333V26.3833H6.5415H8.12481H8.17481V26.3333V24.75Z"
          fill="#EEF2F6"
          stroke="#EEF2F6"
          strokeWidth="0.1"
        />
        <path
          d="M16.0918 13.6667V13.6167H16.0418H9.7085H9.6585V13.6667V15.2501V15.3001H9.7085H16.0418H16.0918V15.2501V13.6667Z"
          fill="#EEF2F6"
          stroke="#EEF2F6"
          strokeWidth="0.1"
        />
        <path
          d="M8.17481 13.6667V13.6167H8.12481H6.5415H6.4915V13.6667V15.2501V15.3001H6.5415H8.12481H8.17481V15.2501V13.6667Z"
          fill="#EEF2F6"
          stroke="#EEF2F6"
          strokeWidth="0.1"
        />
        <path
          d="M5.79981 31.875V31.825H5.74981H4.1665H4.1165V31.875V33.4583C4.1165 34.7976 5.20222 35.8833 6.5415 35.8833H8.12481H8.17481V35.8333V34.25V34.2H8.12481H6.5415C6.1319 34.2 5.79981 33.8679 5.79981 33.4583V31.875Z"
          fill="#EEF2F6"
          stroke="#EEF2F6"
          strokeWidth="0.1"
        />
        <path
          d="M11.3418 34.25V34.2H11.2918H9.7085H9.6585V34.25V35.8333V35.8833H9.7085H11.2918H11.3418V35.8333V34.25Z"
          fill="#EEF2F6"
          stroke="#EEF2F6"
          strokeWidth="0.1"
        />
      </g>
      <defs>
        <clipPath id="dp_architecture_clip0">
          <rect width="38" height="38" fill="white" transform="translate(1 1)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArchitectureIcon;
