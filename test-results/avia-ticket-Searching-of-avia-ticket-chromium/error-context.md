# Test info

- Name: Searching of avia ticket
- Location: C:\Users\anast\Desktop\TsBooking\tests-booking\avia-ticket.spec.ts:10:6

# Error details

```
Error: locator.click: Error: strict mode violation: locator('.ShellButton-module__contentInner___SbZm6') resolved to 8 elements:
    1) <span class="ShellButton-module__contentInner___SbZm6">…</span> aka getByRole('button', { name: 'Звідки Kiev Усі аеропорти' })
    2) <span class="ShellButton-module__contentInner___SbZm6">…</span> aka getByRole('button', { name: 'Звідки Kiev Усі аеропорти' })
    3) <span class="ShellButton-module__contentInner___SbZm6">…</span> aka getByRole('button', { name: 'Куди' })
    4) <span class="ShellButton-module__contentInner___SbZm6">…</span> aka getByRole('button', { name: 'Куди' })
    5) <span class="ShellButton-module__contentInner___SbZm6">…</span> aka getByRole('button', { name: 'Дати подорожі сб, 19' })
    6) <span class="ShellButton-module__contentInner___SbZm6">…</span> aka getByRole('button', { name: 'Дати подорожі сб, 19' })
    7) <span class="ShellButton-module__contentInner___SbZm6">…</span> aka getByRole('button', { name: 'Пасажири 1 дорослий' })
    8) <span class="ShellButton-module__contentInner___SbZm6">…</span> aka getByRole('button', { name: 'Пасажири 1 дорослий' })

Call log:
  - waiting for locator('.ShellButton-module__contentInner___SbZm6')

    at C:\Users\anast\Desktop\TsBooking\tests-booking\avia-ticket.spec.ts:24:32
```

# Page snapshot

```yaml
- link "Перейти до головної сторінки":
  - /url: "#basiclayout"
- banner:
  - navigation:
    - link "Головна сторінка бронювання перельотів":
      - /url: https://flights.booking.com/?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142
      - img
    - 'button "Мова: Українська"'
    - link "Служба підтримки клієнтів":
      - /url: https://secure.booking.com/help?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df&source=hc_entry_point_flights_header
    - link "Створити акаунт":
      - /url: https://flights.booking.com/api/oauth/register?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df&redirectURL=%2Fflights%2Findex.uk.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ%26aid%3D304142%26locale%3Duk%26distribution_id%3D3tbo4UsmTNzABRlKME7dOT%26etStateBlob%3DEl6efAzN6jNZe2FxFOLnsCGgKDL_nEesqaSqGYMRrDBx1AVEZx_KNhuNbG3GkXTuK%26country%3Dua%26client_name%3Db-web-shell-bff%26adplat%3Dwww-index-web_shell_header-flight-missing_creative-3tbo4UsmTNzABRlKME7dOT
      - text: Зареєструватися
    - link "Увійти":
      - /url: https://flights.booking.com/api/oauth/login?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df&redirectURL=%2Fflights%2Findex.uk.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ%26aid%3D304142%26locale%3Duk%26distribution_id%3D3tbo4UsmTNzABRlKME7dOT%26etStateBlob%3DEl6efAzN6jNZe2FxFOLnsCGgKDL_nEesqaSqGYMRrDBx1AVEZx_KNhuNbG3GkXTuK%26country%3Dua%26client_name%3Db-web-shell-bff%26adplat%3Dwww-index-web_shell_header-flight-missing_creative-3tbo4UsmTNzABRlKME7dOT
  - navigation "Що ви шукаєте?":
    - list:
      - listitem:
        - link "Помешкання":
          - /url: https://www.booking.com/index.uk.html?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&selected_currency=UAH&sid=6f5549f5716c49fe4639a61d34fbe7df
      - listitem:
        - link "Переліт":
          - /url: https://ch.booking.com/c?st=RkxJR0hU&lt=TEFORElOR19QQUdF&si=Q2g1aUxXTjBMWEJzWVhSbWIzSnRMV1JwYzNSeWFXSjFkR2x2YmkxamRHUVFBaHBBS3VxZ0w0ZDBVMmJEUjhpakpsMGdWc1JacWxEdTIzMU9LVC9pVXQyRXVzeUtVd2R2K0NZYlRXcXRSb2k0b1VEdTBiQnFUMjRlNGxMM2JYRnNQcWt5QVE9PQ%3D%3D&target=aHR0cHM6Ly9mbGlnaHRzLmJvb2tpbmcuY29tL3B4Z28_ZXRTdGF0ZUJsb2I9RWxjOGJZeXl4RVMwUUpVV2ZfaG42U0pEWDUzamtHN29Lai1wSVJwSEM0RGM2YUZWcmV1TXRWOGZuY1BJektmRlAmYWRwbGF0PXd3dy11bmtub3duLXdlYl9zaGVsbF9oZWFkZXItZmxpZ2h0LW1pc3NpbmdfY3JlYXRpdmUtNm9TenlDektRaGtPRUsyVkZRN093diZsYWJlbD1nZW4xNzNuci0xRkNBRW9nZ0k0NkFkSU0xZ0VhT2tCaUFFQm1BRXh1QUVYeUFFTTJBRUI2QUVCLUFFQ2lBSUJxQUlEdUFMZnU3X0NCc0FDQWRJQ0pEaGpZakEwWkRjNExUazVaV0l0TkRNd01pMDVOVEV3TFdaak1UbGpNR0UzWVRRNU45Z0NCZUFDQVEmbGFuZz11ayZkaXN0cmlidXRpb25faWQ9Nm9TenlDektRaGtPRUsyVkZRN093diZhaWQ9MzA0MTQyJmNsaWVudF9uYW1lPWItd2ViLXNoZWxsLWJmZiZzaWQ9NmY1NTQ5ZjU3MTZjNDlmZTQ2MzlhNjFkMzRmYmU3ZGY%3D
      - listitem:
        - link "Оренда авто":
          - /url: https://ch.booking.com/c?st=Q0FS&lt=TEFORElOR19QQUdF&si=Q2g1aUxXTjBMWEJzWVhSbWIzSnRMV1JwYzNSeWFXSjFkR2x2YmkxamRHUVFBaHBBSUJZM2lUeGM4R3pzZkJuSFArRE54OC9Ccy8xQjZXRHgzUExXY2FrYVN0SDFkRU1NQTBNQjRTRGJia0Jsb1lmYVI5OVNobWExWHZOWUJvRjVVaGpqQmc9PQ%3D%3D&target=aHR0cHM6Ly93d3cuYm9va2luZy5jb20vY2Fycy9pbmRleC51ay5odG1sP3NlbGVjdGVkX2N1cnJlbmN5PVVBSCZldFN0YXRlQmxvYj1FbGM4Yll5eXhFUzBRSlVXZl9objZTSkRYNTNqa0c3b0tqLXBJUnBIQzREYzZhRlZyZXVNdFY4Zm5jUEl6S2ZGUCZhZHBsYXQ9d3d3LXVua25vd24td2ViX3NoZWxsX2hlYWRlci1jYXItbWlzc2luZ19jcmVhdGl2ZS02b1N6eUN6S1Foa09FSzJWRlE3T3d2JmxhYmVsPWdlbjE3M25yLTFGQ0FFb2dnSTQ2QWRJTTFnRWFPa0JpQUVCbUFFeHVBRVh5QUVNMkFFQjZBRUItQUVDaUFJQnFBSUR1QUxmdTdfQ0JzQUNBZElDSkRoallqQTBaRGM0TFRrNVpXSXRORE13TWkwNU5URXdMV1pqTVRsak1HRTNZVFE1TjlnQ0JlQUNBUSZkaXN0cmlidXRpb25faWQ9Nm9TenlDektRaGtPRUsyVkZRN093diZhaWQ9MzA0MTQyJmNsaWVudF9uYW1lPWItd2ViLXNoZWxsLWJmZiZzaWQ9NmY1NTQ5ZjU3MTZjNDlmZTQ2MzlhNjFkMzRmYmU3ZGY%3D
      - listitem:
        - link "Дозвілля":
          - /url: https://ch.booking.com/c?st=QVRUUkFDVElPTg%3D%3D&lt=TEFORElOR19QQUdF&si=Q2g1aUxXTjBMWEJzWVhSbWIzSnRMV1JwYzNSeWFXSjFkR2x2YmkxamRHUVFBUnBBNmo4YUxGekY1MkNzVFQrZURtcXJDSE1kRTZHVkJ4L1IvOWp2Y1hucXVKek9UU0FjMVY2VmdDeSs0emREZlYvN3UveHRBb3BLUWNQU1JBY05KdC9yQmc9PQ%3D%3D&target=aHR0cHM6Ly93d3cuYm9va2luZy5jb20vYXR0cmFjdGlvbnMvaW5kZXgudWsuaHRtbD9zZWxlY3RlZF9jdXJyZW5jeT1VQUgmZXRTdGF0ZUJsb2I9RWxjOGJZeXl4RVMwUUpVV2ZfaG42U0pEWDUzamtHN29Lai1wSVJwSEM0RGM2YUZWcmV1TXRWOGZuY1BJektmRlAmYWRwbGF0PXd3dy11bmtub3duLXdlYl9zaGVsbF9oZWFkZXItYXR0cmFjdGlvbi1taXNzaW5nX2NyZWF0aXZlLTZvU3p5Q3pLUWhrT0VLMlZGUTdPd3YmbGFiZWw9Z2VuMTczbnItMUZDQUVvZ2dJNDZBZElNMWdFYU9rQmlBRUJtQUV4dUFFWHlBRU0yQUVCNkFFQi1BRUNpQUlCcUFJRHVBTGZ1N19DQnNBQ0FkSUNKRGhqWWpBMFpEYzRMVGs1WldJdE5ETXdNaTA1TlRFd0xXWmpNVGxqTUdFM1lUUTVOOWdDQmVBQ0FRJmRpc3RyaWJ1dGlvbl9pZD02b1N6eUN6S1Foa09FSzJWRlE3T3d2JmFpZD0zMDQxNDImY2xpZW50X25hbWU9Yi13ZWItc2hlbGwtYmZmJnNpZD02ZjU1NDlmNTcxNmM0OWZlNDYzOWE2MWQzNGZiZTdkZg%3D%3D
      - listitem:
        - link "Таксі з/до аеропорту":
          - /url: https://ch.booking.com/c?st=VEFYSQ%3D%3D&lt=TEFORElOR19QQUdF&si=Q2g1aUxXTjBMWEJzWVhSbWIzSnRMV1JwYzNSeWFXSjFkR2x2YmkxamRHUVFBUnBBTlBDTE5CdzlRdmRyWkZ2MVBtZzBhUHFnb0gvTDYrS2trMC80ZDl4RTNlYjNIV1VqaFFQZVNjTW1KaWtwQkpHaFREVDRpOXNWcnFhRmc3aGttbDlpQ3c9PQ%3D%3D&target=aHR0cHM6Ly93d3cuYm9va2luZy5jb20vdGF4aS9pbmRleC51ay5odG1sP3NlbGVjdGVkX2N1cnJlbmN5PVVBSCZldFN0YXRlQmxvYj1FbGM4Yll5eXhFUzBRSlVXZl9objZTSkRYNTNqa0c3b0tqLXBJUnBIQzREYzZhRlZyZXVNdFY4Zm5jUEl6S2ZGUCZhZHBsYXQ9d3d3LXVua25vd24td2ViX3NoZWxsX2hlYWRlci10YXhpLW1pc3NpbmdfY3JlYXRpdmUtNm9TenlDektRaGtPRUsyVkZRN093diZsYWJlbD1nZW4xNzNuci0xRkNBRW9nZ0k0NkFkSU0xZ0VhT2tCaUFFQm1BRXh1QUVYeUFFTTJBRUI2QUVCLUFFQ2lBSUJxQUlEdUFMZnU3X0NCc0FDQWRJQ0pEaGpZakEwWkRjNExUazVaV0l0TkRNd01pMDVOVEV3TFdaak1UbGpNR0UzWVRRNU45Z0NCZUFDQVEmZGlzdHJpYnV0aW9uX2lkPTZvU3p5Q3pLUWhrT0VLMlZGUTdPd3YmYWlkPTMwNDE0MiZjbGllbnRfbmFtZT1iLXdlYi1zaGVsbC1iZmYmc2lkPTZmNTU0OWY1NzE2YzQ5ZmU0NjM5YTYxZDM0ZmJlN2Rm
- main:
  - heading "Легко порівнюйте і бронюйте дешеві перельоти" [level=1]
  - text: Знайдіть напрямок для подорожі своєї мрії
  - group:
    - radio "В обидва кінці" [checked]
    - text: В обидва кінці
    - radio "В один кінець"
    - text: В один кінець
    - radio "Складний маршрут"
    - text: Складний маршрут
  - combobox "Салон":
    - option "Економ" [selected]
    - option "Преміум-економ"
    - option "Бізнес"
    - option "Перший клас"
  - checkbox "Лише прямі рейси"
  - text: Лише прямі рейси
  - button "Звідки Kiev Усі аеропорти"
  - button "Змінити пункти відправлення та повернення"
  - button "Куди"
  - button "Дати подорожі сб, 19 лип. – сб, 26 лип."
  - button "Пасажири 1 дорослий"
  - button "Шукати"
  - heading "Популярні міста" [level=2]
  - text: Бронюйте рейси в напрямку, популярному серед мандрівників з України
  - region:
    - group:
      - 'link "Варшава, Польща Варшава, Польща Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"':
        - /url: https://flights.booking.com/flights/IEV-WAW/?type=ROUNDTRIP&adults=1&cabinClass=ECONOMY&sort=BEST&depart=2025-06-21&return=2025-06-28&from=IEV&to=WAW&ca_source=flights_index_td&aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&adplat=www-index-web_shell_header-flight-missing_creative-3tbo4UsmTNzABRlKME7dOT
        - img "Варшава, Польща"
        - text: "Варшава, Польща Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"
    - group:
      - 'link "Берлін, Німеччина Берлін, Німеччина Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"':
        - /url: https://flights.booking.com/flights/IEV-BER/?type=ROUNDTRIP&adults=1&cabinClass=ECONOMY&sort=BEST&depart=2025-06-21&return=2025-06-28&from=IEV&to=BER&ca_source=flights_index_td&aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&adplat=www-index-web_shell_header-flight-missing_creative-3tbo4UsmTNzABRlKME7dOT
        - img "Берлін, Німеччина"
        - text: "Берлін, Німеччина Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"
    - group:
      - 'link "Рим, Італія Рим, Італія Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"':
        - /url: https://flights.booking.com/flights/IEV-ROM/?type=ROUNDTRIP&adults=1&cabinClass=ECONOMY&sort=BEST&depart=2025-06-21&return=2025-06-28&from=IEV&to=ROM&ca_source=flights_index_td&aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&adplat=www-index-web_shell_header-flight-missing_creative-3tbo4UsmTNzABRlKME7dOT
        - img "Рим, Італія"
        - text: "Рим, Італія Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"
    - group:
      - 'link "Лондон, Велика Британія Лондон, Велика Британія Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"':
        - /url: https://flights.booking.com/flights/IEV-LON/?type=ROUNDTRIP&adults=1&cabinClass=ECONOMY&sort=BEST&depart=2025-06-21&return=2025-06-28&from=IEV&to=LON&ca_source=flights_index_td&aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&adplat=www-index-web_shell_header-flight-missing_creative-3tbo4UsmTNzABRlKME7dOT
        - img "Лондон, Велика Британія"
        - text: "Лондон, Велика Британія Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"
    - group:
      - 'link "Мілан, Італія Мілан, Італія Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"':
        - /url: https://flights.booking.com/flights/IEV-MIL/?type=ROUNDTRIP&adults=1&cabinClass=ECONOMY&sort=BEST&depart=2025-06-21&return=2025-06-28&from=IEV&to=MIL&ca_source=flights_index_td&aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&adplat=www-index-web_shell_header-flight-missing_creative-3tbo4UsmTNzABRlKME7dOT
        - img "Мілан, Італія"
        - text: "Мілан, Італія Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"
    - group:
      - 'link "Стамбул, Туреччина Стамбул, Туреччина Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"':
        - /url: https://flights.booking.com/flights/IEV-IST/?type=ROUNDTRIP&adults=1&cabinClass=ECONOMY&sort=BEST&depart=2025-06-21&return=2025-06-28&from=IEV&to=IST&ca_source=flights_index_td&aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&adplat=www-index-web_shell_header-flight-missing_creative-3tbo4UsmTNzABRlKME7dOT
        - img "Стамбул, Туреччина"
        - text: "Стамбул, Туреччина Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"
    - group:
      - 'link "Барселона, Іспанія Барселона, Іспанія Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"':
        - /url: https://flights.booking.com/flights/IEV-BCN/?type=ROUNDTRIP&adults=1&cabinClass=ECONOMY&sort=BEST&depart=2025-06-21&return=2025-06-28&from=IEV&to=BCN&ca_source=flights_index_td&aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&adplat=www-index-web_shell_header-flight-missing_creative-3tbo4UsmTNzABRlKME7dOT
        - img "Барселона, Іспанія"
        - text: "Барселона, Іспанія Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"
    - group:
      - 'link "Болонья, Італія Болонья, Італія Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"':
        - /url: https://flights.booking.com/flights/IEV-BLQ/?type=ROUNDTRIP&adults=1&cabinClass=ECONOMY&sort=BEST&depart=2025-06-21&return=2025-06-28&from=IEV&to=BLQ&ca_source=flights_index_td&aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&adplat=www-index-web_shell_header-flight-missing_creative-3tbo4UsmTNzABRlKME7dOT
        - img "Болонья, Італія"
        - text: "Болонья, Італія Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"
    - group:
      - 'link "Катанія, Італія Катанія, Італія Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"':
        - /url: https://flights.booking.com/flights/IEV-CTA/?type=ROUNDTRIP&adults=1&cabinClass=ECONOMY&sort=BEST&depart=2025-06-21&return=2025-06-28&from=IEV&to=CTA&ca_source=flights_index_td&aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&adplat=www-index-web_shell_header-flight-missing_creative-3tbo4UsmTNzABRlKME7dOT
        - img "Катанія, Італія"
        - text: "Катанія, Італія Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"
    - group:
      - 'link "Кельн, Німеччина Кельн, Німеччина Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"':
        - /url: https://flights.booking.com/flights/IEV-CGN/?type=ROUNDTRIP&adults=1&cabinClass=ECONOMY&sort=BEST&depart=2025-06-21&return=2025-06-28&from=IEV&to=CGN&ca_source=flights_index_td&aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&adplat=www-index-web_shell_header-flight-missing_creative-3tbo4UsmTNzABRlKME7dOT
        - img "Кельн, Німеччина"
        - text: "Кельн, Німеччина Рейси з: Igor Sikorsky Kyiv International Airport 21 чер. - 28 чер. · В обидві сторони"
  - heading "Ваш акаунт – ваші поїздки" [level=2]
  - heading "Уся інформація про ваші поїздки в одному місці" [level=3]
  - text: Увійдіть в акаунт, щоб швидше бронювати поїздки й легше керувати ними
  - link "Увійти":
    - /url: https://flights.booking.com/api/oauth/login?redirectURL=%2Fflights%2Findex.uk.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ%26aid%3D304142%26locale%3Duk%26distribution_id%3D3tbo4UsmTNzABRlKME7dOT%26etStateBlob%3DEl6efAzN6jNZe2FxFOLnsCGgKDL_nEesqaSqGYMRrDBx1AVEZx_KNhuNbG3GkXTuK%26country%3Dua%26client_name%3Db-web-shell-bff%26adplat%3Dwww-index-web_shell_header-flight-missing_creative-3tbo4UsmTNzABRlKME7dOT&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df&label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ
  - link "Зареєструватися":
    - /url: https://flights.booking.com/api/oauth/register?aid=304142&redirectURL=%2Fflights%2Findex.uk.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ%26aid%3D304142%26locale%3Duk%26distribution_id%3D3tbo4UsmTNzABRlKME7dOT%26etStateBlob%3DEl6efAzN6jNZe2FxFOLnsCGgKDL_nEesqaSqGYMRrDBx1AVEZx_KNhuNbG3GkXTuK%26country%3Dua%26client_name%3Db-web-shell-bff%26adplat%3Dwww-index-web_shell_header-flight-missing_creative-3tbo4UsmTNzABRlKME7dOT&label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&sid=6f5549f5716c49fe4639a61d34fbe7df
  - heading "Широкий вибір для пошуку" [level=2]
  - text: Порівнюйте рейси, авіакомпанії та ціни – усе в одному місці
  - heading "Без прихованих зборів" [level=2]
  - text: Чітка деталізація ціни на кожному етапі бронювання
  - heading "Більш гнучкі правила" [level=2]
  - text: Змінюйте дати своєї подорожі з гнучкими квитками* *Гнучкі авіаквитки доступні в певних тарифах за додаткову плату
  - heading "Найкращі перельоти з країни Україна" [level=2]
  - text: Відкрийте для себе напрямки, куди можна полетіти з країни Україна, і почніть планувати нову подорож.
  - navigation:
    - tablist:
      - tab "Популярні маршрути" [selected]
      - tab "Міста"
      - tab "Країни"
      - tab "Регіони"
      - tab "Аеропорти"
    - tabpanel "Популярні маршрути":
      - link "Київ Варшава":
        - /url: https://www.booking.com/flights/route/city-to-city/ua-kiev-to-pl-warsaw.uk.html
      - link "Київ Стамбул":
        - /url: https://www.booking.com/flights/route/city-to-city/ua-kiev-to-tr-istanbul.uk.html
      - link "Київ Лондон":
        - /url: https://www.booking.com/flights/route/city-to-city/ua-kiev-to-gb-london.uk.html
      - link "Київ Анталія":
        - /url: https://www.booking.com/flights/route/city-to-city/ua-kiev-to-tr-antalya.uk.html
      - link "Київ Париж":
        - /url: https://www.booking.com/flights/route/city-to-city/ua-kiev-to-fr-paris.uk.html
      - link "Київ Барселона":
        - /url: https://www.booking.com/flights/route/city-to-city/ua-kiev-to-es-barcelona.uk.html
      - link "Київ Краків":
        - /url: https://www.booking.com/flights/route/city-to-city/ua-kiev-to-pl-krakow.uk.html
      - link "Київ Кишинів":
        - /url: https://www.booking.com/flights/route/city-to-city/ua-kiev-to-md-chisinau.uk.html
      - link "Київ Рим":
        - /url: https://www.booking.com/flights/route/city-to-city/ua-kiev-to-it-rome.uk.html
  - heading "Питання та відповіді" [level=2]
  - button "Як знайти найдешевші рейси на Booking.com?"
  - button "Чи можна забронювати авіаквитки в одну сторону на Booking.com?"
  - button "Наскільки заздалегідь можна забронювати рейс?"
  - button "Чи дешевшають авіаквитки ближче до дати вильоту?"
  - button "Що таке гнучкий квиток?"
  - button "Чи стягує Booking.com збори за використання кредитної картки?"
- contentinfo:
  - heading "Підтримка" [level=3]
  - list:
    - listitem:
      - 'link "Коронавірус (COVID-19): питання та відповіді"':
        - /url: https://www.booking.com/covid_19.uk.html?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df
    - listitem:
      - link "Керуйте своїми подорожами":
        - /url: https://secure.booking.com/content/cs.uk.html?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df
    - listitem:
      - link "Допомога від служби підтримки":
        - /url: https://secure.booking.com/help?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df&source=hc_entry_point_flights_footer
    - listitem:
      - link "Центр ресурсів з безпеки":
        - /url: https://www.booking.com/trust_and_safety.uk.html?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df
  - heading "Різне" [level=3]
  - list:
    - listitem:
      - link "Програма лояльності Genius":
        - /url: https://www.booking.com/genius.uk.html?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df
    - listitem:
      - link "Сезонні та святкові пропозиції":
        - /url: https://www.booking.com/deals/index.uk.html?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df
    - listitem:
      - link "Статті про подорожі":
        - /url: https://www.booking.com/articles.uk.html?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df
    - listitem:
      - link "Booking.com для компаній":
        - /url: https://business.booking.com/?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df
    - listitem:
      - link "Traveller Review Awards":
        - /url: https://www.booking.com/traveller-awards/index.uk.html?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df
    - listitem:
      - link "Прокат авто":
        - /url: https://cars.booking.com/Home.do?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&affiliateCode=booking-com&adplat=footer
    - listitem:
      - link "Пошук авіаквитків":
        - /url: https://booking.com/pxgo?lang=uk&url=https%3A%2F%2Fbooking.kayak.com%2Fin%3Fsid%3D6f5549f5716c49fe4639a61d34fbe7df%26mc%3DUAH%26bdclc%3Duk%26p%3Dfooter_link%26a%3Dbdc%252Ffooter_link&aid=304142&token=UmFuZG9tSVYkc2RlIyh9YWktmrwAPG7d0xk8r8arn9t7KpKAV6F0lyXSPh1kuTiBI8hYYXB1lZnLRIrJMxOmHrIEkpLmrUr_5nO2gH8CchS_re9SaATszK5BXcaqNZFOhLuzcPbuw64yVTm7FKtSDiauHuYrYUs4102fBH-GhNEtnoRwmQ5xenLKCSFR74218On6RQC_WmYFDmHXTAgcSTLQHs1KU7oQSKY8Z_-GtdWwHviAr-Fur-H-IGnCTMM9aPgINERT-E49XqbL-6VDYufJVQKFzlUdK29mV4NC8l8psCKHJbyhELnoCxEUpF-pqpb5956MZBPTPpCh56e11pPM0LRxOkvGDnojyHvydANtJD7RbH77h0BHK69D5yi5Y_klisp-PYyNtlzW_0p6eso8hdwaIWqfSeapC-a4_A2SNd8VeKHFbJswSsoMyg57huhQOxBbvbnMEA0ARNJkEltlhtLqTiha2LJpXqEm-Thm6pn_W43EfA8-sJVGEHH2X7cEP81SeLMmFEMH7HWoMJhWbBnREMeU&label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ
    - listitem:
      - link "Замовлення столиків в ресторанах":
        - /url: https://www.opentable.com/?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&ref=16087
    - listitem:
      - link "Booking.com для туристичних консультантів":
        - /url: https://www.booking.com/affiliate-program/v2/index.uk.html?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df&utm_campaign=booking-footer&utm_content=travel-agents-link&utm_medium=referral&utm_source=booking.com
  - heading "Правила та налаштування" [level=3]
  - list:
    - listitem:
      - link "Конфіденційність і файли cookie":
        - /url: https://www.booking.com/content/privacy.uk.html?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df
    - listitem:
      - link "Правила та умови":
        - /url: https://www.booking.com/content/terms.uk.html?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df
    - listitem:
      - link "Заява про протидію сучасному рабству":
        - /url: https://www.bookingholdings.com/modern-slavery-statement/?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142
    - listitem:
      - link "Заява про права людини":
        - /url: https://www.bookingholdings.com/about/compliance-and-ethics/human-rights/?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142
  - heading "Партнери" [level=3]
  - list:
    - listitem:
      - link "Увійти в Екстранет":
        - /url: https://admin.booking.com/?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df&utm_campaign=login_footer_v0&utm_medium=frontend&utm_source=extranet_login_footer
    - listitem:
      - link "Допомога партнерам":
        - /url: https://partner.booking.com/ru?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df&utm_campaign=footer_list&utm_medium=frontend_footer&utm_source=booking.com
    - listitem:
      - link "Зареєструвати своє помешкання":
        - /url: https://join.booking.com/?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&lang=uk&sid=6f5549f5716c49fe4639a61d34fbe7df&utm_medium=frontend&utm_source=footer_menu
    - listitem:
      - link "Станьте нашим афіліатом":
        - /url: https://www.booking.com/affiliate-program/v2/index.uk.html?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df&utm_campaign=booking-footer&utm_content=become-an-affiliate-link&utm_medium=referral&utm_source=booking.com
  - heading "Загальна інформація" [level=3]
  - list:
    - listitem:
      - link "Про Booking.com":
        - /url: https://www.booking.com/content/about.uk.html?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df
    - listitem:
      - link "Як ми працюємо":
        - /url: https://www.booking.com/content/how_we_work.uk.html?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df
    - listitem:
      - link "Ековідповідальність":
        - /url: https://www.sustainability.booking.com/?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142
    - listitem:
      - link "Прес-центр":
        - /url: https://globalnews.booking.com/?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&lang=uk
    - listitem:
      - link "Вакансії":
        - /url: https://careers.booking.com/?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142
    - listitem:
      - link "Для інвесторів":
        - /url: https://www.bookingholdings.com/?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142
    - listitem:
      - link "Корпоративні контакти":
        - /url: https://www.booking.com/content/contact-us.uk.html?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALfu7_CBsACAdICJDhjYjA0ZDc4LTk5ZWItNDMwMi05NTEwLWZjMTljMGE3YTQ5N9gCBeACAQ&aid=304142&sid=6f5549f5716c49fe4639a61d34fbe7df
  - 'button "Мова: Українська"'
  - text: Booking.com входить у групу компаній Booking Holdings Inc. – світового лідера в галузі онлайн-туризму та супутніх послуг. Авторські права © 1996–2025 Booking.com™. Усі права захищено.
  - img "Booking.com":
    - img
  - img "Priceline.com":
    - img
  - img "Kayak":
    - img
  - img "Agoda":
    - img
  - img "OpenTable":
    - img
- paragraph
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test'
   2 | import { PopupsPage } from '../page-objects/PopupsPage'
   3 | import { HomePage} from '../page-objects/HomePage'
   4 | import { FlightPage } from '../page-objects/FlightPage'
   5 |
   6 | let homePage: HomePage
   7 | let popupsPage: PopupsPage
   8 | let flightPage: FlightPage
   9 |
  10 | test.only ("Searching of avia ticket", async ({ page }) => {
  11 |     homePage = new HomePage(page)
  12 |     popupsPage = new PopupsPage(page)
  13 |     flightPage = new FlightPage(page)
  14 |
  15 |     await homePage.visit()
  16 |     await popupsPage.handleAllPopups()
  17 |     await popupsPage.closeSignInPopupIfVisible()
  18 |
  19 |     await flightPage.flightsPage.click()
  20 |     await popupsPage.handleAllPopups()
  21 |     await popupsPage.closeSignInPopupIfVisible()
  22 |
  23 |     await page.pause()
> 24 |     await flightPage.fromField.click()
     |                                ^ Error: locator.click: Error: strict mode violation: locator('.ShellButton-module__contentInner___SbZm6') resolved to 8 elements:
  25 |     await flightPage.departureCityInput.fill('Berlin')
  26 |
  27 |
  28 |     await flightPage.enterDestinationTo('Rome')
  29 | })
```