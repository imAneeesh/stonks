import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React from 'react'

export const Menu = () => {
  return (
    <IonMenu side="start" contentId="content">
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem routerLink="/">Home</IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/my-avatar">My Avatar</IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}