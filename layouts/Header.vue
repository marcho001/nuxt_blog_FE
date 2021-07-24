<template lang="pug">
header.header
  nav.nav
    .nav__wrapper
      .nav__brand
        .nav__logo
          p.title Blog
        .nav__time
          .clock
      .nav__weather
        .nav__location
        .nav__degree
      .nav__burger
        .burger__button.burger__button--hover
          .burger__line
</template>
<style lang="scss" scoped>
.header {
  border-bottom: 2px solid $borderColor;
}
.nav {
  max-width: 1080px;
  margin: auto;
  &__wrapper {
    display: flex;
    flex-grow: 1;
    height: 60px;
    position: relative;
  }
  &__brand {
    display: flex;
    align-items: center;
  }
  &__logo {
  }
  &__time {
  }
  &__burger {
    height: 120px;
    width: 120px;
    position: absolute;
    right: 0;
    top: 0;
    overflow: hidden;
  }
}
.burger {
  &__button {
    width: 80px;
    height: 80px;
    background: $white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    &--hover {
      cursor: pointer;
      position: absolute;
      @include border(2px);
      @include positionSet(0px, 0px);
      transform: translate3d(0, 0, 0);
      transition: transform 0.2s;
      &:hover {
        transform: translate(-20px, 20px);
      }
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: calc(100% + 2px);
        left: 0;
        @include border(2px);
        border-bottom: none;
        border-top: none;
        transform: skewX(-45deg);
        transform-origin: bottom;
        background: lighten($black, 70%);
      }
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: -2px;
        left: calc(100%);
        @include border(2px);

        transform: skewY(-45deg);
        transform-origin: left;
        background: lighten($black, 40%);
      }
    }
  }
  &__line {
    display: inline-block;
    height: 4px;
    width: 60%;
    background: $black;
    border-radius: 4px;
    position: relative;
    &::before {
      content: ' ';
      display: block;
      height: 4px;
      width: 100%;
      background: $black;
      border-radius: 4px;
      position: absolute;
      top: calc(100% + 15px);
    }
    &::after {
      content: ' ';
      display: block;
      height: 4px;
      width: 100%;
      background: $black;
      border-radius: 4px;
      position: absolute;
      bottom: calc(100% + 15px);
    }
  }
}
.clock {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  @include border(2px);
  line-height: 60px;
}
.title {
  font-size: 2rem;
  font-weight: 700;
  padding: 0 1rem;
}
</style>
