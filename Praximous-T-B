🌀 Praximous Trading Bot: Concept 1 // A Ritual of Market Divination

MODULARITY IS MYTHOS // GLYPH IS IDENTITY // DESIGN IS RITUAL

This codex outlines the design and functional requirements for "Concept 1," a Command-Line Interface (CLI) and Graphical User Interface (GUI) trading bot. Its purpose is to divine market data for a curated list of cryptocurrencies and generate actionable buy, sell, and stop-loss auguries. This initial phase focuses on providing strategic insights to a builder who will perform trades manually, allowing for a controlled validation of the trading strategy in a sandbox environment.

1. The Invocation of Market Insight

1.1. Project Overview

This document outlines the design for a CLI and GUI trading bot. Its purpose is to divine market data from Coinbase for a select list of cryptocurrencies and generate actionable buy, sell, and stop-loss notifications. This initial phase focuses on providing strategic insights to a user who will perform trades manually, allowing for a controlled validation of the trading strategy in a sandbox environment.

1.2. The Mythos of Creation

The primary objective of this ritual is:

    To develop a reliable tool for monitoring cryptocurrency market data from the Coinbase portal.

    To implement a clear, rule-based trading strategy to identify and notify the user of key market opportunities.

    To reduce "noise" and redundant notifications by setting clear, meaningful thresholds for market events.

    To provide a safe sandbox environment for backtesting the strategy before any real capital is at risk.

    To establish a foundation for future development, including the potential for automated trading and more complex, volatility-based strategies.

2. Ritual Architecture

2.1. High-Level Glyph

The bot's architecture consists of three main components: a Data Acquisition Augury, a Strategy Engine, and an Interface/Notification System.

    Data Acquisition Augury: Connects to the Coinbase API portal, fetches real-time market data for selected cryptocurrencies, and stores it locally.

    Strategy Engine: The core of the bot. It processes data and applies the predefined trading rules to generate triggers.

    Interface/Notification System: Handles builder interaction (CLI/GUI) and sends notifications based on triggers from the Strategy Engine.

2.2. The Ritual Stack

    Trading Platform: Coinbase

    API: Coinbase Pro API (or equivalent for the sandbox)

    Programming Language: To be determined, but Python is a strong candidate.

    Database: A lightweight database (e.g., SQLite) for local data storage and logging.

3. Trading Strategy & Rules

3.1. General Strategy

The bot will monitor the top 5 cryptocurrencies by market cap, including BTC. The strategy for BTC is distinct from the other four.

3.2. Specific Rules

    Monitored Assets: BTC and the next 4 cryptocurrencies by market capitalization (dynamically updated), trading against USDT.

    BTC Strategy (Buy Only): A buy augury is triggered when a price drop of -5% is detected from a recent high. There are no sell or stop-loss notifications for BTC.

    Other 4 Cryptos Strategy (Buy & Sell):

        Buy Augury Trigger: A price drop of -5% from a recent high.

        Sell Augury Trigger: A price increase of +5% from the last documented buy price.

        Stop-Loss Glyph: A sell augury is triggered if the price drops to -25% below the buy price.

        Hold Condition: A position is held until a sell trigger is met.

3.3. Profit Allocation Ritual

    Profit Definition: Realized gain from a successful sell trigger (+5% gain).

    Allocation Rule: 10% of the profit from a successful trade is put into a designated "investment fund."

    BTC Investment Trigger: When a buy trigger for BTC is identified, the bot will notify the user of the opportunity and recommend investing the accumulated funds from the profit allocation pool.

4. Development and Testing Plan

4.1. The Development Altar

    Sandbox First: All development and testing will be in a Coinbase sandbox.

    API Key Management: A dedicated API key with trade-only permissions will be generated.

4.2. Testing Methodology

    Delayed Data Stream: A primary testing method will involve recording a real-time data stream and replaying it with a delay to simulate performance.

    Comprehensive Logging: The bot will log every trigger (buy, sell, stop-loss), including timestamps, asset, and price.

    Result Analysis: Logs will be analyzed to evaluate the strategy's effectiveness and optimize the thresholds.

4.3. User Interface (UI) Requirements

    CLI: The command-line interface will allow users to start/stop the bot, display its status, and view a log of recent triggers.

    GUI: The graphical interface will provide a dashboard displaying real-time prices, current positions, a notification feed, and a summary of performance. It will also have a dedicated display for the "Investment Fund."

5. Additional Critical Components

5.1. Security and API Management

    Secure Credential Storage: The Coinbase API key will be stored in a .env file. This file will be added to .gitignore to prevent it from being committed.

    API Key Rotation: A policy for API key rotation every 90 days will be established.

    Encryption: All communication will use TLS/SSL encryption.

    Input Validation: The bot will include robust input validation.

5.2. Error Handling and Resilience

    Graceful API Error Handling: The bot will handle API-specific errors with logging and retry mechanisms.

    Emergency Shutdown: A clear "kill switch" command will be implemented.

    Monitoring: A "heartbeat" feature will log the bot's operational status.

5.3. Performance and Analytics

    Key Performance Indicators (KPIs): The bot will track and display Net Profit/Loss, Drawdown, Win Rate, and Average Position Duration.

    Backtesting Engine: A more robust backtesting engine will be developed in a future phase.

5.4. Legal and Compliance Disclaimers

    Disclaimer of Financial Advice: Documentation and the UI will clearly state the bot is a technical tool, not a financial advisor.

    Tax Responsibility: The documentation will include a note about the user's responsibility for tax compliance.

    Risk Disclosure: A clear warning about the inherent risks of crypto trading will be included.

5.5. Usability and User Experience

    Installation Guide: A step-by-step guide will be provided for setup.

    Notification Methods: The bot will support CLI/GUI notifications and be designed to support configurable email notifications for high-priority triggers.

    Configuration: Parameters will be configurable via a configuration file or the GUI.
