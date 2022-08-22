import { useContext, useEffect } from "react";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { svgs } from "../../data/SvgList";

import { PrimaryButton } from "../../components/PrimaryButton";

export const HomePage = (props: any) => {
  const { theme, dispatch } = useContext(Context);

  useEffect(() => {
    if (props.page === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });

      dispatch({
        type: "CHANGE_ACTIVE_PAGE",
        payload: {
          status: props.page,
        },
      });
    }
  },[props.page, dispatch, theme.activePage.status]);

  return (
    <C.HomeSection
      mode={theme.mode.status}
      isMenuOpen={theme.isMenuOpen.status}
      backgroundLandscapeSmall={svgs.background.home.landscape.small}
      backgroundLandscapeLarge={svgs.background.home.landscape.large}
      backgroundPortrait={svgs.background.home.portrait}
    >
      <C.Container
        className="load-container"
        isMenuOpen={theme.isMenuOpen.status}
      >
        <C.ContainerInfo isMenuOpen={theme.isMenuOpen.status}>
          <svg className="avatar load-avatar" viewBox="0 0 272 340" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M181.467 135.963C180.946 140.309 179.873 144.549 178.325 148.642L178.32 148.655C178.314 148.671 178.309 148.685 178.302 148.702L178.118 149.179C178.114 149.191 178.11 149.201 178.105 149.213L178.086 149.261C178.023 149.422 177.958 149.584 177.894 149.745L177.832 149.897C177.827 149.91 177.822 149.922 177.816 149.936L177.767 150.056V155.269C198.206 154.564 218.644 153.817 239.08 153.027C242.514 152.895 245.735 154.434 247.888 157.237L255.224 166.786C256.75 168.772 257.564 171.13 257.604 173.678C257.905 192.981 257.652 212.294 256.845 231.582C260.714 240.767 264.509 250.105 267.927 259.469C272.655 272.421 274.517 285.548 270.087 298.899C265.463 312.835 254.553 324.797 245.458 335.79C243.427 338.33 240.438 339.8 237.266 339.826L136.746 340.659C136.689 340.66 136.632 340.66 136.575 340.659L36.0547 339.826C32.8484 339.8 29.8285 338.297 27.7982 335.708C21.4468 328.027 14.7708 319.918 9.47462 311.403C5.35519 304.781 2.11846 297.814 1.01791 289.924C-0.156084 281.508 1.29588 273.302 3.65696 265.257C6.79785 254.554 11.4241 243.8 15.7338 233.553C15.9833 232.959 16.2336 232.365 16.4841 231.772C15.6711 212.421 15.4145 193.045 15.7174 173.678C15.7572 171.13 16.5714 168.772 18.0968 166.786L25.4326 157.237C27.5857 154.434 30.8073 152.895 34.241 153.027C54.8331 153.823 75.4267 154.576 96.0216 155.285V151.164C93.9169 146.312 92.483 141.231 91.8534 135.962C90.2963 134.283 89.1786 132.167 88.626 129.845C88.028 127.332 88.1173 124.704 88.8569 122.279C88.2227 120.168 87.5873 118.058 86.9496 115.948C84.6731 109.727 82.1719 101.243 84.2615 94.4687C83.6005 90.6801 83.9483 86.1952 85.9811 83.189C83.6072 67.9129 81.3898 47.6167 86.3466 33.8027C87.3873 29.8051 90.7667 24.8234 93.3099 22.0491C96.0037 19.1108 99.3155 16.6938 103.094 15.8532C105.045 14.1586 107.217 12.8133 109.608 11.8061C116.258 9.00496 123.352 9.29348 130.352 8.66297C137.212 8.04509 142.882 6.54423 148.482 2.12932C150.069 0.878294 151.88 0.420752 153.837 0.77642C155.794 1.13209 157.352 2.20197 158.442 3.93951C160.267 6.84751 160.013 10.4856 158.994 14.0141C160.939 13.403 162.998 12.8238 164.931 12.5558C167.474 12.2031 169.825 13.2324 171.371 15.3749C171.879 16.0791 172.252 16.8375 172.489 17.6265C173.104 17.9498 173.709 18.2947 174.303 18.6625C175.973 16.331 178.693 15.2967 181.434 15.978C184.29 16.688 186.326 19.0521 186.704 22.0991C187.239 26.4116 187.228 30.9808 187.043 35.367C191.659 49.1573 189.826 68.3444 187.621 83.2082C189.735 86.3442 190.051 91.0898 189.238 95.0221C190.411 99.3662 189.762 104.224 188.687 108.508L188.565 108.991C188.561 109.005 188.558 109.018 188.554 109.033L188.489 109.284C188.485 109.3 188.481 109.313 188.477 109.328L188.426 109.521C187.847 111.696 187.142 113.84 186.371 115.948C185.734 118.054 185.097 120.161 184.464 122.268C184.553 122.559 184.632 122.853 184.702 123.149C185.22 125.343 185.215 127.641 184.697 129.834C184.147 132.161 183.027 134.281 181.467 135.963V135.963Z" fill="#374047"/>
            <path d="M170.838 138.169H102.95V176.48H170.838V138.169Z" fill="#6BC38B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M136.661 174.655C145.205 181.435 159.927 165.023 163.895 160.253C170.719 151.077 174.355 141.696 174.844 132.086C176.369 131.402 177.542 129.918 177.972 128.069C178.402 126.22 178.07 124.257 177.053 122.75C177.053 122.75 177.972 119.669 179.829 113.53C184.541 100.77 183.876 93.7851 177.874 92.553C186.008 47.062 182.957 27.9117 165.03 22.3195C150.464 20.0826 136.797 17.7019 136.797 17.7019C136.797 17.7019 122.018 20.0826 107.452 22.3195C89.4849 27.9344 86.4548 47.1076 94.6463 92.7813C89.407 94.4698 89.0357 101.386 93.5123 113.552C95.3698 119.692 96.289 122.773 96.289 122.773C95.2722 124.28 94.92 126.243 95.3698 128.092C95.7999 129.941 96.9732 131.425 98.4981 132.109C98.9866 141.718 102.623 151.1 109.447 160.276C113.415 165.046 128.156 181.457 136.681 174.678L136.661 174.655V174.655Z" fill="#6CC28F"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M136.66 174.655C136.66 173.582 136.66 173.057 136.66 173.057V45.9661H98.419V130.032C98.4583 140.348 102.114 150.414 109.426 160.252C113.395 165.023 128.136 181.435 136.66 174.655Z" fill="#85CA9E"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M136.662 174.655C136.662 173.582 136.662 173.057 136.662 173.057V45.9661H174.903V130.032C174.864 140.348 171.208 150.414 163.896 160.252C159.927 165.023 145.186 181.435 136.662 174.655Z" fill="#B4DDC1"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M121.391 98.0994C123.249 97.1633 125.224 96.6159 127.218 96.4785C124.637 93.3741 121.079 91.5937 117.383 91.5484C113.669 91.5026 110.091 93.1693 107.452 96.205C111.343 100.085 116.855 100.838 121.391 98.0765V98.0994Z" fill="#FEFEFE"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M151.93 98.0994C150.073 97.1633 148.098 96.6159 146.104 96.4785C148.684 93.3741 152.243 91.5937 155.938 91.5484C159.653 91.5026 163.23 93.1693 165.87 96.205C161.979 100.085 156.466 100.838 151.93 98.0765V98.0994Z" fill="#FEFEFE"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M102.699 88.0331C107.333 87.645 109.64 87.4394 109.64 87.4394L131.205 89.3112V81.2083H109.64C106.375 81.6874 103.677 84.3579 102.699 88.0099V88.0331Z" fill="#5CA47A"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M170.601 88.0331C165.967 87.645 163.661 87.4394 163.661 87.4394L142.095 89.3112V81.2083H163.661C166.925 81.6874 169.623 84.3579 170.601 88.0099V88.0331Z" fill="#6CC28F"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M142.097 89.3342C140.513 100.428 140.513 108.211 142.097 112.662C147.669 118.254 148.998 123.07 146.086 127.087C144.013 129.096 142.214 129.096 140.65 127.11C138.949 128.868 138.109 129.758 138.109 129.758C137.6 129.917 137.112 129.986 136.662 129.963C136.662 113.757 136.662 97.5514 136.662 81.3455C140.298 81.2765 142.116 81.2542 142.116 81.2542C142.116 86.1614 142.116 89.3571 142.116 89.3571L142.097 89.3342V89.3342Z" fill="#85CA9E"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M131.205 89.3342C132.789 100.428 132.789 108.211 131.205 112.662C125.634 118.254 124.304 123.07 127.217 127.087C129.29 129.096 131.088 129.096 132.652 127.11C134.354 128.868 135.194 129.758 135.194 129.758C135.703 129.917 136.191 129.986 136.641 129.963C136.641 113.757 136.641 97.5514 136.641 81.3455C133.004 81.2765 131.186 81.2542 131.186 81.2542C131.186 86.1614 131.186 89.3571 131.186 89.3571L131.205 89.3342V89.3342Z" fill="#B4DDC1"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M136.659 141.262C135.799 140.623 134.938 139.664 134.117 138.341C130.188 141.605 126.043 143.203 121.722 143.134C120.705 143.134 119.943 143.568 119.454 144.435H136.659H153.864C153.375 143.568 152.613 143.134 151.596 143.134C147.275 143.203 143.13 141.605 139.201 138.341C138.379 139.664 137.519 140.623 136.659 141.262V141.262Z" fill="#5CA47A"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M121.508 144.412C131.616 144.412 136.66 144.412 136.66 144.412V152.56C129.407 152.309 124.363 149.57 121.508 144.412Z" fill="#B4DDC1"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M151.792 144.412C141.684 144.412 136.64 144.412 136.64 144.412V152.56C143.893 152.309 148.937 149.57 151.792 144.412Z" fill="#B4DDC1"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M98.4782 132.109C98.439 105.655 98.4199 92.4163 98.4199 92.4163C89.7395 91.8911 88.1168 98.9445 93.4932 113.552C95.3502 119.692 96.2693 122.773 96.2693 122.773C95.2523 124.28 94.9001 126.243 95.3502 128.092C95.7801 129.941 96.9536 131.425 98.4782 132.109V132.109Z" fill="#85CA9E"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M174.842 132.109C174.882 105.655 174.901 92.4163 174.901 92.4163C183.582 91.8911 185.205 98.9445 179.828 113.552C177.971 119.692 177.052 122.773 177.052 122.773C178.069 124.28 178.421 126.243 177.971 128.092C177.541 129.941 176.367 131.425 174.842 132.109V132.109Z" fill="#CCE7D4"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M135.195 129.757C133.415 127.909 132.516 126.973 132.516 126.973C131.949 127.498 131.128 127.612 130.463 127.247C129.798 126.882 129.407 126.105 129.485 125.284C130.6 123.275 132.496 124.782 135.195 129.757V129.757Z" fill="#5CA47A"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M138.108 129.757C139.888 127.909 140.787 126.973 140.787 126.973C141.354 127.498 142.175 127.612 142.839 127.247C143.504 126.882 143.896 126.105 143.817 125.284C142.703 123.275 140.806 124.782 138.108 129.757Z" fill="#6CC28F"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M114.198 91.9134C113.651 92.6439 113.318 93.6024 113.318 94.6521C113.318 96.9806 114.941 98.8753 116.935 98.8753C118.929 98.8753 120.552 96.9806 120.552 94.6521C120.552 93.534 120.181 92.5067 119.574 91.7538C118.851 91.6166 118.127 91.5482 117.385 91.5253C116.31 91.5024 115.253 91.6396 114.217 91.8902L114.198 91.9134Z" fill="#6CC28F"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M159.104 91.9134C159.652 92.6439 159.984 93.6024 159.984 94.6521C159.984 96.9806 158.362 98.8753 156.368 98.8753C154.374 98.8753 152.751 96.9806 152.751 94.6521C152.751 93.534 153.122 92.5067 153.728 91.7538C154.451 91.6166 155.175 91.5482 155.918 91.5253C156.993 91.5024 158.049 91.6396 159.085 91.8902L159.104 91.9134V91.9134Z" fill="#6CC28F"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M165.008 22.3421C184.23 28.3621 187.595 49.8841 177.168 102.756C176.565 105.815 174.689 108.979 174.002 112.251C174.021 93.9906 174.021 84.8377 174.021 84.8377C174.021 77.3737 173.024 71.1881 169.192 65.9839C165.36 60.7797 159.808 57.744 153.943 57.6298C141.84 57.6298 135.78 57.6298 135.78 57.6298C130.13 51.7638 126.924 43.3641 126.924 34.5306C126.924 25.7202 140.491 21.5615 146.142 15.6952C150.755 20.6711 150.15 20.0596 164.989 22.3421H165.008Z" fill="#5CA47A"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M107.433 22.3427C87.1003 28.711 85.8876 52.4265 98.4396 112.251C98.4197 93.9912 98.4197 84.8386 98.4197 84.8386C98.4197 77.3743 99.4174 71.1887 103.249 65.9848C107.081 60.7804 112.633 57.7447 118.498 57.6307C130.6 57.6307 136.661 57.6307 136.661 57.6307C142.312 51.7647 145.518 43.3647 145.518 34.5315C145.518 25.7209 142.447 23.5679 136.796 17.7019C132.182 22.6778 122.272 20.0602 107.433 22.3427Z" fill="#5CA47A"/>
            <path d="M152.652 7.92078C154.172 10.3428 148.167 21.6665 146.622 23.8455L144.876 26.7938C144.963 26.7938 160.677 20.4602 165.842 19.7442C164.894 22.0298 161.076 31.2198 162.796 32.5045C166.582 35.3348 177.024 27.3709 179.833 23.0329C182.037 40.8002 174.125 81.1012 173.941 79.9007C169.787 52.8207 147.717 55.2388 138.505 63.9146C136.738 65.579 134.712 65.7936 134.712 65.7936C136.644 62.7202 135.928 61.5748 135.251 58.3082C127.915 61.4329 126.998 62.0684 118.515 61.8207C99.0338 61.2515 96.8069 34.0815 92.9405 36.261C92.9405 34.3163 99.1483 22.6179 106.121 22.7872C117.078 10.9694 134.856 21.9519 152.652 7.92078V7.92078Z" fill="#6BC38B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M22.0753 236.474C1.28897 285.9 0.929248 292.137 33.1114 331.052L32.2317 271.571C32.2468 240.052 32.0692 214.264 31.8376 214.264C31.6056 214.264 27.213 224.259 22.0753 236.474V236.474ZM240.978 271.297L240.171 331.102C258.996 308.339 273.08 293.906 261.454 262.057C256.514 248.523 246.269 223.901 242.855 217.356L240.954 213.716L240.978 271.297Z" fill="#6BC38B"/>
            <path d="M118.79 237.128V243.592L103.083 249.555L118.79 255.462V261.925L96.3743 252.787V246.378L118.79 237.128V237.128ZM150.131 227.878L129.205 270.396H122.922L143.848 227.878H150.131ZM154.27 237.128L176.58 246.378V252.787L154.27 261.925V255.462L169.924 249.555L154.27 243.592V237.128V237.128Z" fill="#F0FCF5"/>
            <path d="M118.79 237.129H120.121V235.082L118.302 235.832L118.79 237.129V237.129ZM118.79 243.593L119.244 244.902L120.121 244.569V243.593H118.79ZM103.083 249.555L102.629 248.245L99.1628 249.561L102.633 250.866L103.083 249.555ZM118.79 255.462H120.121V254.482L119.24 254.151L118.79 255.462ZM118.79 261.926L118.307 263.224L120.121 263.963V261.926H118.79ZM96.3741 252.787H95.0429V253.739L95.8909 254.085L96.3741 252.787V252.787ZM96.3741 246.379L95.8856 245.082L95.0429 245.431V246.379H96.3741V246.379ZM117.459 237.129V243.593H120.121V237.129H117.459ZM118.336 242.283L102.629 248.245L103.537 250.865L119.244 244.902L118.336 242.283ZM102.633 250.866L118.34 256.773L119.24 254.151L103.533 248.244L102.633 250.866ZM117.459 255.462V261.926H120.121V255.462H117.459ZM119.273 260.627L96.8574 251.489L95.8909 254.085L118.307 263.224L119.273 260.627ZM97.7051 252.787V246.379H95.0429V252.787H97.7051ZM96.8626 247.674L119.279 238.424L118.302 235.832L95.8856 245.082L96.8626 247.674ZM150.13 227.878L151.314 228.517L152.314 226.485H150.13V227.878V227.878ZM129.205 270.396V271.789H130.017L130.389 271.034L129.205 270.396V270.396ZM122.922 270.396L121.739 269.758L120.739 271.789H122.922V270.396V270.396ZM143.848 227.878V226.485H143.036L142.664 227.24L143.848 227.878V227.878ZM148.947 227.24L128.022 269.758L130.389 271.034L151.314 228.517L148.947 227.24V227.24ZM129.205 269.003H122.922V271.789H129.205V269.003ZM124.106 271.034L145.031 228.517L142.664 227.24L121.739 269.758L124.106 271.034V271.034ZM143.848 229.272H150.13V226.485H143.848V229.272ZM154.27 237.129L154.76 235.833L152.939 235.078V237.129H154.27ZM176.579 246.379H177.911V245.432L177.07 245.083L176.579 246.379ZM176.579 252.787L177.065 254.084L177.911 253.738V252.787H176.579ZM154.27 261.926H152.939V263.967L154.755 263.223L154.27 261.926V261.926ZM154.27 255.462L153.818 254.151L152.939 254.483V255.462H154.27V255.462ZM169.924 249.555L170.375 250.865L173.832 249.561L170.379 248.245L169.924 249.555V249.555ZM154.27 243.593H152.939V244.568L153.814 244.901L154.27 243.593ZM153.779 238.423L176.089 247.674L177.07 245.083L154.76 235.833L153.779 238.423ZM175.248 246.379V252.787H177.911V246.379H175.248ZM176.094 251.489L153.785 260.628L154.755 263.223L177.065 254.084L176.094 251.489ZM155.601 261.926V255.462H152.939V261.926H155.601ZM154.721 256.772L170.375 250.865L169.473 248.244L153.818 254.151L154.721 256.772ZM170.379 248.245L154.725 242.283L153.814 244.901L169.469 250.864L170.379 248.245ZM155.601 243.593V237.129H152.939V243.593H155.601Z" fill="#6BC38B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M103.664 85.0034C99.7168 85.4462 95.7715 85.9586 91.9489 87.1251C90.5439 87.5542 90.5905 93.9136 92.0127 95.8514C93.7666 98.2413 92.9503 102.93 95.4303 106.829C97.9537 110.796 105.149 111.042 109.427 111.247C124.712 111.984 127.673 110.708 130.679 102.09C132.661 96.409 134.739 93.6479 136.797 93.8138C138.854 93.6479 140.932 96.409 142.914 102.09C145.92 110.708 148.881 111.984 164.167 111.247C168.445 111.042 175.64 110.796 178.163 106.829C180.643 102.93 179.827 98.2413 181.581 95.8514C183.003 93.9136 183.049 87.5542 181.645 87.1251C177.822 85.9586 173.877 85.4462 169.929 85.0034C162.916 84.2176 153.674 84.8355 147.246 86.519C143.352 87.5218 140.109 87.9938 136.797 87.9128C133.484 87.9938 130.241 87.5218 126.347 86.519C119.919 84.8355 110.677 84.2176 103.664 85.0034V85.0034ZM172.307 88.0744C177.135 89.2446 178.789 92.6912 177.656 99.2236C176.561 105.535 175.786 107.723 170.634 108.471C168.621 108.663 165.792 108.683 161.657 108.683C148.893 108.683 148.639 108.598 146.357 103.587C142.38 94.8592 143.153 90.697 149.945 88.5656C156.458 86.921 165.94 86.5338 172.307 88.0744ZM101.287 88.0744C96.4587 89.2446 94.8047 92.6912 95.9377 99.2236C97.0325 105.535 97.8073 107.723 102.959 108.471C104.972 108.663 107.801 108.683 111.936 108.683C124.701 108.683 124.954 108.598 127.237 103.587C131.213 94.8592 130.441 90.697 123.649 88.5656C117.135 86.921 107.653 86.5338 101.287 88.0744V88.0744Z" fill="#374047"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M170.838 162.762C193.673 161.985 216.505 161.156 239.336 160.274C240.595 160.225 241.699 160.753 242.488 161.781L249.824 171.33C250.385 172.06 250.661 172.86 250.676 173.797C251.488 225.741 248.251 277.729 241.002 329.123C240.722 331.109 239.13 332.559 237.212 332.575L136.691 333.408C136.67 333.408 136.652 333.408 136.63 333.408L36.1097 332.575C34.1916 332.559 32.5993 331.109 32.3193 329.123C25.0708 277.729 21.8331 225.741 22.6454 173.797C22.6599 172.86 22.9364 172.06 23.4971 171.33L30.8329 161.781C31.6225 160.753 32.7263 160.225 33.9856 160.274C56.9723 161.162 79.9607 161.997 102.951 162.778V176.479H170.838V162.762Z" fill="#6BC38B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M36.1397 328.533L136.66 329.366L237.18 328.533C244.401 277.336 247.622 225.608 246.813 173.862L239.477 164.313C205.148 165.639 170.876 166.845 136.66 167.93C102.444 166.845 68.1714 165.639 33.8425 164.313L26.5067 173.862C25.6975 225.608 28.9191 277.336 36.1397 328.533V328.533Z" fill="#374047"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M110.257 249.544L119.614 253.063C120.599 253.433 121.226 254.366 121.226 255.462V261.926C121.226 262.794 120.85 263.54 120.165 264.03C119.48 264.52 118.679 264.616 117.906 264.301L95.4898 255.163C94.5352 254.773 93.938 253.859 93.938 252.787V246.379C93.938 245.31 94.5307 244.399 95.4805 244.007L117.897 234.757C118.67 234.438 119.474 234.532 120.161 235.021C120.848 235.511 121.226 236.259 121.226 237.129V243.593C121.226 244.686 120.603 245.617 119.621 245.989L110.257 249.544V249.544ZM152.296 229.046L131.371 271.563C130.942 272.434 130.14 272.945 129.205 272.945H122.922C122.048 272.945 121.297 272.504 120.842 271.723C120.387 270.942 120.356 270.042 120.757 269.229L141.682 226.711C142.11 225.841 142.912 225.329 143.848 225.329H150.13C151.004 225.329 151.755 225.77 152.21 226.551C152.665 227.332 152.696 228.233 152.296 229.046ZM162.771 249.544L153.437 245.988C152.456 245.615 151.834 244.685 151.834 243.593V237.129C151.834 236.258 152.212 235.509 152.901 235.02C153.589 234.531 154.393 234.438 155.167 234.759L177.477 244.009C178.425 244.402 179.015 245.312 179.015 246.379V252.787C179.015 253.858 178.42 254.771 177.467 255.161L155.158 264.3C154.384 264.616 153.582 264.521 152.896 264.031C152.211 263.542 151.834 262.794 151.834 261.926V255.462C151.834 254.367 152.459 253.435 153.443 253.063L162.771 249.544V249.544Z" fill="#6BC38B"/>
            <path d="M118.79 237.129V243.593L103.083 249.555L118.79 255.462V261.926L96.3743 252.787V246.379L118.79 237.129V237.129ZM150.131 227.878L129.205 270.396H122.922L143.848 227.878H150.131ZM154.27 237.129L176.58 246.379V252.787L154.27 261.926V255.462L169.924 249.555L154.27 243.593V237.129V237.129Z" fill="#F0FCF5"/>
          </svg>

          <C.Info mode={theme.mode.status}>
            <h1 className="load-title">
              <span className="title-hello">Hi there!</span>
              <br />
              <span className="title-name">
                I'm Mario <span className="accent-color">Elvio</span>
              </span>
              <br />
              <span className="title-work">
                <span className="accent-color">Front-end</span> developer
              </span>
            </h1>

            <C.SocialButtons
              className="load-social"
              mode={theme.mode.status}
            >
              <a
                aria-label="Linkedin button"
                href="https://www.linkedin.com/in/marioelvio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-social" d="M22 0H2C0.89543 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H22C23.1046 24 24 23.1046 24 22V2C24 0.89543 23.1046 0 22 0Z" fill="white"/>
                  <path className="fill-background" d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5563 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2938 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"/>
                </svg>
              </a>
              <a
                aria-label="GitHub button"
                href="https://github.com/jukerah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-background" d="M22 0H2C0.895431 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H22C23.1046 24 24 23.1046 24 22V2C24 0.895431 23.1046 0 22 0Z" fill="white"/>
                  <path className="fill-social" fillRule="evenodd" clipRule="evenodd" d="M12 4C7.5816 4 4 7.67194 4 12.2029C4 15.8265 6.292 18.9015 9.4712 19.9857C9.8712 20.0611 10.0168 19.808 10.0168 19.5902C10.0168 19.3961 10.0104 18.8794 10.0064 18.1956C7.7808 18.691 7.3112 17.0958 7.3112 17.0958C6.948 16.1475 6.4232 15.8953 6.4232 15.8953C5.6968 15.3876 6.4784 15.3974 6.4784 15.3974C7.2808 15.4548 7.7032 16.2425 7.7032 16.2425C8.4168 17.4955 9.576 17.1335 10.0312 16.9239C10.1048 16.394 10.3112 16.0329 10.54 15.8282C8.764 15.621 6.896 14.9167 6.896 11.7738C6.896 10.8788 7.208 10.1458 7.7192 9.57261C7.6368 9.36543 7.3624 8.53097 7.7976 7.40252C7.7976 7.40252 8.4696 7.18142 9.9976 8.24272C10.6502 8.06052 11.3236 7.96772 12 7.96675C12.68 7.97002 13.364 8.06092 14.0032 8.24272C15.5304 7.18142 16.2008 7.40171 16.2008 7.40171C16.6376 8.53097 16.3624 9.36543 16.2808 9.57261C16.7928 10.1458 17.1032 10.8788 17.1032 11.7738C17.1032 14.9249 15.232 15.6185 13.4504 15.8216C13.7376 16.0747 13.9928 16.575 13.9928 17.3407C13.9928 18.4364 13.9832 19.3216 13.9832 19.5902C13.9832 19.8097 14.1272 20.0652 14.5336 19.9849C16.1266 19.438 17.5115 18.3924 18.4924 16.996C19.4733 15.5995 20.0007 13.9229 20 12.2029C20 7.67194 16.4176 4 12 4Z"/>
                </svg>
              </a>
              <a
                aria-label="Youtube button"
                href="https://www.youtube.com/channel/UCIuG63VswXMTYUuzeZgqRjw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-background" d="M22 0H2C0.895431 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H22C23.1046 24 24 23.1046 24 22V2C24 0.895431 23.1046 0 22 0Z"/>
                  <path className="fill-social" d="M19.8406 8.37351C19.8406 8.37351 19.6844 7.2952 19.2031 6.82172C18.5938 6.19856 17.9125 6.1955 17.6 6.15884C15.3625 6 12.0031 6 12.0031 6H11.9969C11.9969 6 8.6375 6 6.4 6.15884C6.0875 6.1955 5.40625 6.19856 4.79688 6.82172C4.31563 7.2952 4.1625 8.37351 4.1625 8.37351C4.1625 8.37351 4 9.64121 4 10.9059V12.0911C4 13.3557 4.15937 14.6234 4.15937 14.6234C4.15937 14.6234 4.31562 15.7017 4.79375 16.1752C5.40313 16.7984 6.20313 16.777 6.55938 16.8442C7.84063 16.9633 12 17 12 17C12 17 15.3625 16.9939 17.6 16.8381C17.9125 16.8014 18.5938 16.7984 19.2031 16.1752C19.6844 15.7017 19.8406 14.6234 19.8406 14.6234C19.8406 14.6234 20 13.3588 20 12.0911V10.9059C20 9.64121 19.8406 8.37351 19.8406 8.37351ZM10.3469 13.5299V9.13413L14.6687 11.3396L10.3469 13.5299Z"/>
                </svg>
              </a>
              <a
                aria-label="WhatsApp button"
                href="https://api.whatsapp.com/send?phone=5516988658468"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-background" d="M22 0H2C0.89543 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H22C23.1046 24 24 23.1046 24 22V2C24 0.89543 23.1046 0 22 0Z"/>
                  <path className="fill-social" fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.4348 4.37771 14.7814 5.03913 15.9457L4 20L8.17992 19.0307C9.31507 19.6488 10.6165 20 12 20ZM12 18.7692C15.7385 18.7692 18.7692 15.7385 18.7692 12C18.7692 8.26146 15.7385 5.23077 12 5.23077C8.26146 5.23077 5.23077 8.26146 5.23077 12C5.23077 13.4435 5.68257 14.7814 6.45248 15.8801L5.84615 18.1538L8.15996 17.5754C9.25106 18.3283 10.574 18.7692 12 18.7692Z"/>
                  <path className="fill-social" d="M10.0327 8.31809C9.8508 7.96987 9.57168 8.0007 9.28971 8.0007C8.78577 8.0007 8 8.57585 8 9.64625C8 10.5235 8.4057 11.4838 9.77277 12.9203C11.0921 14.3067 12.8256 15.0238 14.2648 14.9994C15.7039 14.975 16 13.795 16 13.3965C16 13.2198 15.885 13.1317 15.8057 13.1078C15.3153 12.8835 14.4108 12.4656 14.205 12.3871C13.9992 12.3086 13.8917 12.4148 13.8249 12.4726C13.6383 12.642 13.2683 13.1415 13.1416 13.2538C13.015 13.3662 12.8261 13.3093 12.7475 13.2668C12.4583 13.1563 11.6742 12.8239 11.0492 12.2466C10.2762 11.5326 10.2308 11.287 10.0852 11.0683C9.96865 10.8934 10.0541 10.7861 10.0968 10.7392C10.2634 10.5561 10.4933 10.2734 10.5964 10.1329C10.6996 9.99239 10.6177 9.7791 10.5686 9.64626C10.3573 9.07493 10.1783 8.59666 10.0327 8.31809Z"/>
                </svg>
              </a>
            </C.SocialButtons>
          </C.Info>
        </C.ContainerInfo>
        <C.NavButtons
          className="load-button"
          isMenuOpen={theme.isMenuOpen.status}
        >
          <PrimaryButton
            text={"More about me"}
            backgroundColor={"--limed-spruce"}
            backgroundColorHover={"--de-york"}
            color={"--white"}
            colorHover={"--limed-spruce"}
            url={"/about"}
          />

          <PrimaryButton
            text={"My portfolio"}
            backgroundColor={"--skeptic"}
            backgroundColorHover={"--de-york"}
            color={"--limed-spruce"}
            colorHover={"--limed-spruce"}
            url={"/portfolio"}
          />
        </C.NavButtons>
      </C.Container>
    </C.HomeSection>
  );
};
