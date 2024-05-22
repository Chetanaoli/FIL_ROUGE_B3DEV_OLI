# Projet Fil Rouge (Système de Suivi en Temps Réel par Géolocalisation)

Ce projet se concentre sur le développement d'un système sophistiqué de suivi en temps réel par géolocalisation, fournissant aux utilisateurs une carte interactive affichant leur position actuelle et leurs mouvements historiques. L'application utilise Angular pour le frontend, Node.js pour le backend et MongoDB comme base de données NoSQL. De plus, elle intègre des API externes telles que Leaflet pour la visualisation des données de géolocalisation et OpenWeather pour les informations météorologiques en temps réel. Le système est conçu avec des considérations de sécurité, de conformité au RGPD et de scalabilité horizontale pour assurer des performances optimales et la confidentialité des utilisateurs.

## Fonctionnalités

### Interface Réactive
- **Framework Frontend :** Utilise Angular pour construire une interface très réactive et conviviale.
- **Design :** Implémente CSS pour un design visuellement attrayant, incluant des animations pour améliorer l'esthétique.
- **Conception SPA :** Adopte une approche d'application monopage (SPA) pour offrir une expérience utilisateur fluide.

### Données de Géolocalisation
- **Intégration API :** Intègre l'API Leaflet pour collecter et afficher les données de géolocalisation sur une carte interactive.
- **Stockage des Données :** Enregistre les données de géolocalisation des utilisateurs dans une base de données NoSQL MongoDB pour le suivi et l'analyse historiques.

### Informations Météorologiques
- **API Météo :** Utilise l'API OpenWeather pour fournir des conditions météorologiques en temps réel en fonction de la localisation actuelle de l'utilisateur.

### Sécurité
- **Protection des Données :** Implémente des mesures de sécurité robustes pour protéger les données de géolocalisation et garantir la confidentialité des utilisateurs.

### Scalabilité
- **Architecture Microservices :** Intègre des technologies de microservices pour permettre la scalabilité horizontale et une gestion efficace des performances.

### Authentification des Utilisateurs
- **Intégration OAuth :** Permet la connexion des utilisateurs via Google sign-in pour un processus d'authentification sécurisé et simplifié.

### Conformité au RGPD
- **Conformité Réglementaire :** Demande aux utilisateurs d'accepter les conditions d'utilisation pour assurer la conformité au Règlement Général sur la Protection des Données (RGPD).

## Installation

### Prérequis
- **Node.js et npm :** Assurez-vous que Node.js et npm (Node Package Manager) sont installés sur votre système.
- **MongoDB :** Configurez une instance de base de données MongoDB.

### Étapes d'Installation

1. **Cloner le Répertoire :**
   ```bash
   git clone https://github.com/Chetanaoli/FIL_ROUGE_B3DEV_OLI.git
   ````
2. **Installer les Dépendances Frontend :**
   ```bash
   cd geolocation-tracker
   npm install
   ng serve
   ```
3. **Configuration du Backend :**
   ```bash
   cd backend
   npm install
   npm run start
   ```
