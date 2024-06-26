import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderRight,
  HeaderRightBottom,
  HeaderRightTop,
  InnerWrap,
  Join,
  Login,
  LoginState,
  Logo,
  Wrap,
} from "../../styles/header/HeaderStyle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useCustomLogin from "../../hooks/useCustomLogin";
import { getCookie, removeCookie } from "../../util/cookieUtil";
import { logout } from "../../slices/loginSlice";
import ShopModal from "../shop/ShopModal";
import { ModalBackground } from "../../styles/review/ReveiwStyle";

export const Header = () => {
  const navigate = useNavigate(`/`);
  const token = getCookie("accessToken");
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleLogin = () => {
    navigate(`/login`);
  };
  const handleJoin = () => {
    navigate(`/joinTos`);
  };
  const handleMy = subItem => {
    sessionStorage.setItem("selectedItem", subItem);
  };
  // 로그인 & 로그아웃
  const { isLogin, moveToPath, doLogout } = useCustomLogin();
  // console.log(userAuth)
  // const dispatch = useDispatch();
  const handleLogout = () => {
    doLogout();
    // removeCookie("accessToken");
    // removeCookie("refreshToken");
    moveToPath("/");
  };

  const loginState = useSelector(state => state.loginSlice);
  // console.log(loginState);

  // 매장선택창 나오기
  const [shopModal, setShopModal] = useState(false);
  const handleShopModal = () => setShopModal(true);
  const closeShopModal = () => setShopModal(false);

  return (
    <Wrap>
      <InnerWrap>
        <Logo>
          <a href="/">
            <img src="../../images/header/logo.svg" />
          </a>
        </Logo>
        <HeaderRight>
          <HeaderRightTop>
            {isLogin ? (
              <LoginState>
                <button onClick={handleLogout}>로그아웃</button>
                <Link
                  to="/my"
                  onClick={() => {
                    handleMy("주문 내역");
                  }}
                >
                  <button>MY PAGE</button>
                </Link>
              </LoginState>
            ) : (
              <LoginState>
                <button onClick={handleLogin}>로그인</button>
                <button onClick={handleJoin}>회원가입</button>
              </LoginState>
            )}
          </HeaderRightTop>
          <HeaderRightBottom>
            <a href="/menu" className="menu">
              메뉴
            </a>
            <div onClick={handleShopModal} className="order">
              주문하기
            </div>
            {shopModal && (
              <>
                <ShopModal onCloseModal={closeShopModal} />
                <ModalBackground></ModalBackground>
              </>
            )}
            <a href="/cart" className="cart">
              <img
                src="../../images/header/shopping_cart.png"
                style={{ marginBottom: "11px" }}
              />
              <div>장바구니</div>
            </a>
          </HeaderRightBottom>
        </HeaderRight>
      </InnerWrap>
    </Wrap>
  );
};

export default Header;
